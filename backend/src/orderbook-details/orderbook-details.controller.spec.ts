import { Test, TestingModule } from '@nestjs/testing';
import { OrderbookDetailsController } from './orderbook-details.controller';

describe('OrderbookDetailsController', () => {
  let controller: OrderbookDetailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderbookDetailsController],
    }).compile();

    controller = module.get<OrderbookDetailsController>(OrderbookDetailsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
