import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  postMessage(message: string): string {
    return `Received message: ${message}`;
  }
}
