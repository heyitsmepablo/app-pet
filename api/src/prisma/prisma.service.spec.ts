import { Test, TestingModule } from '@nestjs/testing';
import { ConfigService } from '@nestjs/config';
import { describe, it, expect, beforeEach, vi } from 'vitest';

const { mockConnect, mockDisconnect, mockAdapterConstructor } = vi.hoisted(() => ({
  mockConnect: vi.fn().mockResolvedValue(undefined),
  mockDisconnect: vi.fn().mockResolvedValue(undefined),
  mockAdapterConstructor: vi.fn(),
}));

vi.mock('../generated/prisma/client.js', () => {
  class MockPrismaClient {
    $connect = mockConnect;
    $disconnect = mockDisconnect;
    options: any;

    constructor(options?: any) {
      this.options = options;
    }
  }
  return {
    PrismaClient: MockPrismaClient,
  };
});

vi.mock('@prisma/adapter-better-sqlite3', () => {
  class MockPrismaBetterSqlite3 {
    options: any;
    constructor(options: any) {
      this.options = options;
      mockAdapterConstructor(options);
    }
  }
  return {
    PrismaBetterSqlite3: MockPrismaBetterSqlite3,
  };
});

import { PrismaService } from './prisma.service.js';

describe('PrismaService', () => {
  let service: PrismaService;

  const mockConfigService = {
    getOrThrow: vi.fn(),
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Instantiation and Configuration', () => {
    it('should strip "file:" prefix from DATABASE_URL and configure adapter', async () => {
      mockConfigService.getOrThrow.mockReturnValue('file:./prisma/dev.db');

      const module: TestingModule = await Test.createTestingModule({
        providers: [
          PrismaService,
          {
            provide: ConfigService,
            useValue: mockConfigService,
          },
        ],
      }).compile();

      service = module.get<PrismaService>(PrismaService);

      expect(service).toBeDefined();
      expect(mockConfigService.getOrThrow).toHaveBeenCalledWith('DATABASE_URL');
      expect(mockAdapterConstructor).toHaveBeenCalledWith({ url: './prisma/dev.db' });
    });

    it('should use raw DATABASE_URL if it does not start with "file:"', async () => {
      mockConfigService.getOrThrow.mockReturnValue('./custom/path.db');

      const module: TestingModule = await Test.createTestingModule({
        providers: [
          PrismaService,
          {
            provide: ConfigService,
            useValue: mockConfigService,
          },
        ],
      }).compile();

      service = module.get<PrismaService>(PrismaService);

      expect(service).toBeDefined();
      expect(mockConfigService.getOrThrow).toHaveBeenCalledWith('DATABASE_URL');
      expect(mockAdapterConstructor).toHaveBeenCalledWith({ url: './custom/path.db' });
    });

    it('should throw error if DATABASE_URL is not configured in ConfigService', async () => {
      mockConfigService.getOrThrow.mockImplementation(() => {
        throw new Error('DATABASE_URL not found');
      });

      await expect(
        Test.createTestingModule({
          providers: [
            PrismaService,
            {
              provide: ConfigService,
              useValue: mockConfigService,
            },
          ],
        }).compile(),
      ).rejects.toThrow('DATABASE_URL not found');
    });
  });

  describe('Lifecycle Hooks', () => {
    beforeEach(async () => {
      mockConfigService.getOrThrow.mockReturnValue('file:./prisma/dev.db');

      const module: TestingModule = await Test.createTestingModule({
        providers: [
          PrismaService,
          {
            provide: ConfigService,
            useValue: mockConfigService,
          },
        ],
      }).compile();

      service = module.get<PrismaService>(PrismaService);
    });

    it('onModuleInit should call $connect', async () => {
      await service.onModuleInit();

      expect(mockConnect).toHaveBeenCalledTimes(1);
    });

    it('onModuleDestroy should call $disconnect', async () => {
      await service.onModuleDestroy();

      expect(mockDisconnect).toHaveBeenCalledTimes(1);
    });
  });
});
