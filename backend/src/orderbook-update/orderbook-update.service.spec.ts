import { Test, TestingModule } from '@nestjs/testing';
import { OrderbookUpdateService } from './orderbook-update.service';

describe('OrderbookUpdateService', () => {
  let service: OrderbookUpdateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderbookUpdateService],
    }).compile();

    service = module.get<OrderbookUpdateService>(OrderbookUpdateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
