import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AppService } from './app.service.js';

@ApiTags('App')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // @ApiOperation({ summary: 'Get Hello' })
  // @ApiResponse({ status: 200, description: 'Success' })
  // getHello(): string {
  //   return this.appService.getHello();
  // }
}
