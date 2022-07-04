import { Injectable, Inject, Post, Body } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderbookUpdate } from './orderbook-update-entity';
import { updateDetails } from './orderbook-update.model';

@Injectable()
export class OrderbookUpdateService {
  constructor(
    @InjectRepository(OrderbookUpdate)
    private orderbookRepository: Repository<OrderbookUpdate>,
  ) {}

  async addDetails(updateDetails: updateDetails): Promise<OrderbookUpdate[]> {
    // return this.orderbookRepository.find();
    //console.log(updateDetails.PCD);
   return await this.orderbookRepository.query(
      `EXECUTE add_update_details '${updateDetails.OrderId}','${updateDetails.PCD}','${updateDetails.Impact}','${updateDetails.comments}','${updateDetails.Include}','${updateDetails.SMV}'`,
    );
  }
  async getApproveDetails(OrderId): Promise<OrderbookUpdate[]> {
    return await this.orderbookRepository.query(
      `EXECUTE get_approval_details '${OrderId}'`,
    );
  }
}
