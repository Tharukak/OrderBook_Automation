import { Controller, Get, Post } from '@nestjs/common';
import { OrderbookService } from './orderbook-details.service';

@Controller('orderbook-details')
export class OrderbookDetailsController {

    constructor(private OrderbookService: OrderbookService) { }

    @Get('/orderdetails')
    getDetails(): any {
     
     return this.OrderbookService.findAll();

    }


    @Get('/buyers')
    getBuyers(): any {
    return this.OrderbookService.getBuyers();
     }
    
}

