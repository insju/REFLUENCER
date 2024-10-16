// import { Controller, Get } from '@nestjs/common';
// import { AppService } from './app.service';

// @Controller()
// export class AppController {
//   constructor(private readonly appService: AppService) {}

//   @Get()
//   getHello(): string {
//     return this.appService.getHello();
//   }
// }

import { Controller, Get } from '@nestjs/common';
import { Client, ClientProxy, Transport } from '@nestjs/microservices';

@Controller()
export class AppController {
  @Client({
    transport: Transport.RMQ,
    options: {
      urls: [process.env.RABBITMQ_URL],
      queue: 'user_queue',
      queueOptions: {
        durable: false,
      },
    },
  })
  private client: ClientProxy;

  @Get('user')
  getUser() {
    return this.client.send({ cmd: 'get_user' }, { id: 1 });
  }
}
