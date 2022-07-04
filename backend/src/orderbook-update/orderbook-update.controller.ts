import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { OrderbookUpdateService } from './orderbook-update.service';
import { updateDetails } from './orderbook-update.model';

@Controller('orderbook-update')
export class OrderbookUpdateController {
    constructor(private OrderbookUpdateService: OrderbookUpdateService) { }

    @Post('/updateDetails')
    async updateDetails(@Body() updateDetails:updateDetails): Promise<any> {
        return this.OrderbookUpdateService.addDetails(updateDetails).catch((err) => {
            //console.log("Error: ", err)
            //return err;
        });
    }

    @Get('/approveDetails/:orderId')
    getapproveDetails(@Param('orderId') orderId: any): Promise<any> {
    return this.OrderbookUpdateService.getApproveDetails(orderId);
     }

}
