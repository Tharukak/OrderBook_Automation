import { Test, TestingModule } from '@nestjs/testing';
import { OrderbookM3ApiController } from './orderbook-m3-api.controller';

describe('OrderbookM3ApiController', () => {
  let controller: OrderbookM3ApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderbookM3ApiController],
    }).compile();

    controller = module.get<OrderbookM3ApiController>(OrderbookM3ApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
