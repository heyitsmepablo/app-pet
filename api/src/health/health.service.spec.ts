import { Test, TestingModule } from '@nestjs/testing';
import { ServiceUnavailableException } from '@nestjs/common';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { HealthService } from './health.service.js';
import { PrismaService } from '../prisma/prisma.service.js';

describe('HealthService', () => {
  let service: HealthService;
  let prismaService: PrismaService;

  const mockPrismaService = {
    $queryRaw: vi.fn(),
  };

  beforeEach(async () => {
    vi.clearAllMocks();

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        HealthService,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
      ],
    }).compile();

    service = module.get<HealthService>(HealthService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(prismaService).toBeDefined();
  });

  describe('checkDatabase', () => {
    it('should return status ok and connected when database query succeeds', async () => {
      mockPrismaService.$queryRaw.mockResolvedValue([{ 1: 1 }]);

      const result = await service.checkDatabase();

      expect(result).toEqual({
        status: 'ok',
        database: 'connected',
      });
      expect(mockPrismaService.$queryRaw).toHaveBeenCalledTimes(1);
    });

    it('should throw ServiceUnavailableException when database query fails', async () => {
      const dbError = new Error('Database connection failed');
      mockPrismaService.$queryRaw.mockRejectedValue(dbError);

      await expect(service.checkDatabase()).rejects.toThrow(
        ServiceUnavailableException,
      );

      // Verify exception payload
      try {
        await service.checkDatabase();
      } catch (error) {
        expect(error).toBeInstanceOf(ServiceUnavailableException);
        const err = error as ServiceUnavailableException;
        expect(err.getStatus()).toBe(503);
        expect(err.getResponse()).toEqual({
          status: 'error',
          database: 'disconnected',
          details: 'Database connection failed',
        });
      }

      expect(mockPrismaService.$queryRaw).toHaveBeenCalledTimes(2);
    });
  });
});
