import { Test, TestingModule } from '@nestjs/testing';
import { ServiceUnavailableException } from '@nestjs/common';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { HealthController } from './health.controller.js';
import { HealthService } from './health.service.js';

describe('HealthController', () => {
  let controller: HealthController;
  let healthService: HealthService;

  const mockHealthService = {
    checkDatabase: vi.fn(),
  };

  beforeEach(async () => {
    vi.clearAllMocks();

    const module: TestingModule = await Test.createTestingModule({
      controllers: [HealthController],
      providers: [
        {
          provide: HealthService,
          useValue: mockHealthService,
        },
      ],
    }).compile();

    controller = module.get<HealthController>(HealthController);
    healthService = module.get<HealthService>(HealthService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(healthService).toBeDefined();
  });

  describe('ping', () => {
    it('should return health status successfully', async () => {
      const expectedResponse = {
        status: 'ok',
        database: 'connected',
      };
      mockHealthService.checkDatabase.mockResolvedValue(expectedResponse);

      const result = await controller.ping();

      expect(result).toEqual(expectedResponse);
      expect(mockHealthService.checkDatabase).toHaveBeenCalledTimes(1);
    });

    it('should propagate ServiceUnavailableException when health check fails', async () => {
      const errorResponse = {
        status: 'error',
        database: 'disconnected',
        details: 'Connection error',
      };
      mockHealthService.checkDatabase.mockRejectedValue(
        new ServiceUnavailableException(errorResponse),
      );

      await expect(controller.ping()).rejects.toThrow(
        ServiceUnavailableException,
      );
      expect(mockHealthService.checkDatabase).toHaveBeenCalledTimes(1);
    });
  });
});
