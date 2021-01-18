import { Module } from '@nestjs/common';

/* Controllers */
import { OrdersController } from '../../../../interface/api/controllers/clients/OrdersController'
/* End Controllers */

/* Services */

/* End Services */

/* Clients */
/* End Clients */

/* Repositories */
/* End Repositories */

/* Db */
/* End Db */

/* Utils */
/* End Utils */

@Module({
    controllers: [OrdersController],
    providers: [],
    exports: [],
})
export class OrdersModule { }