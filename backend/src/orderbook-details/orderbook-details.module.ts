import { Module } from '@nestjs/common';
import { OrderbookService } from './orderbook-details.service';
import { Orderbook } from './orderbook-details.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderbookDetailsController } from './orderbook-details.controller';

@Module({
    imports: [Orderbook,TypeOrmModule.forFeature([Orderbook])],
    providers: [OrderbookService,],
    exports:[OrderbookService],
    controllers: [OrderbookDetailsController],
  })

export class OrderbookDetailsModule {}
