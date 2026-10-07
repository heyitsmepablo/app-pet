import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { HealthService } from './health.service.js';

@ApiTags('Health')
@Controller('ping')
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Get()
  @ApiOperation({ summary: 'Health check ping' })
  @ApiResponse({ status: 200, description: 'Success' })
  @ApiResponse({ status: 503, description: 'ServiceUnavailableException' })
  async ping() {
    return this.healthService.checkDatabase();
  }
}
