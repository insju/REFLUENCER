import { Test, TestingModule } from '@nestjs/testing';
import { InventoryController } from './app.controller';
import { AppService } from './app.service';

describe('InventoryController', () => {
  let appController: InventoryController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [InventoryController],
      providers: [AppService],
    }).compile();

    appController = app.get<InventoryController>(InventoryController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      // expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
