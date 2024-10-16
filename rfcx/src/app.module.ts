import { Module } from '@nestjs/common';
import { InventoryController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [InventoryController],
  providers: [AppService],
})
export class AppModule {}
