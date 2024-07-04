import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from './auth/auth.guard';

@Controller('protected')
export class AppController {
  constructor(private readonly appService: AppService) {}

  
  @UseGuards(AuthGuard)
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post()
  postMessage(message: string): string {
    return this.appService.postMessage(message);
  }
}
