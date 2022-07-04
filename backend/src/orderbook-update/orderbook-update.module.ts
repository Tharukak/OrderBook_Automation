import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderbookUpdate } from './orderbook-update-entity';
import { OrderbookUpdateController } from './orderbook-update.controller';
import { OrderbookUpdateService } from './orderbook-update.service';

@Module({
  imports: [OrderbookUpdate,TypeOrmModule.forFeature([OrderbookUpdate])],
  controllers: [OrderbookUpdateController],
  providers: [OrderbookUpdateService],
  exports:[OrderbookUpdateService],
})
export class OrderbookUpdateModule {}
