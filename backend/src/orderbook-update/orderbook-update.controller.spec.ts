import { Test, TestingModule } from '@nestjs/testing';
import { OrderbookUpdateController } from './orderbook-update.controller';

describe('OrderbookUpdateController', () => {
  let controller: OrderbookUpdateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderbookUpdateController],
    }).compile();

    controller = module.get<OrderbookUpdateController>(OrderbookUpdateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
