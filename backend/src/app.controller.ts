import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { OrderbookService } from './orderbook-details/orderbook-details.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // @Get('/orderdetails')
  // getDetails(): any {
  //   return this.OrderbookService.findAll();
  // }
}
