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

import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class InventoryController {
  @MessagePattern({ cmd: 'check_inventory' })
  checkInventory(data: any) {
    return { success: true, productId: data.productId, stock: 15 };
  }
}
