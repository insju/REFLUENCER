import { Module } from '@nestjs/common';
import { PaymentController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [PaymentController],
  providers: [AppService],
})
export class AppModule {}
