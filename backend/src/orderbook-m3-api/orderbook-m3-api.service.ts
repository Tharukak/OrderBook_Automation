import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class OrderbookM3ApiService {
    constructor()



    async addDetails(): Promise<OrderbookUpdate[]> {
        // return this.orderbookRepository.find();
        //console.log(updateDetails.PCD);
       return await this.orderbookRepository.query(
          `EXECUTE add_update_details '${updateDetails.OrderId}','${updateDetails.PCD}','${updateDetails.Impact}','${updateDetails.comments}','${updateDetails.Include}','${updateDetails.SMV}'`,
        );
      }

}
