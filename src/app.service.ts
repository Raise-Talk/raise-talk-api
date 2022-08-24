import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const aux = 'opa';

    return 'Hello World!';
  }
}
