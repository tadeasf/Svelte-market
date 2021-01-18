import { Controller, Get, Res } from '@nestjs/common';

@Controller('/orders')
export class OrdersController {
    constructor() { }


    @Get('/')
    async getOrders(
        @Res() res: any,
    ) {
        res.status(200).json({ data: 'Hello World'});
    }
}
