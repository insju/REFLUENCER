import { Test, TestingModule } from '@nestjs/testing';
import { PaymentController } from './app.controller';
import { AppService } from './app.service';

describe('PaymentController', () => {
  let appController: PaymentController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PaymentController],
      providers: [AppService],
    }).compile();

    appController = app.get<PaymentController>(PaymentController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      // expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
