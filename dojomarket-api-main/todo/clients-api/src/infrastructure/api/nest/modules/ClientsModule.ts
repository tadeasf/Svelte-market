import { Module } from '@nestjs/common';

/* Controllers */
import { ClientsController } from '../../../../interface/api/controllers/clients/ClientsController'
/* End Controllers */

/* Services */
/* End Services */

/* Repositories */
/* End Repositories */

/* Databases */
/* End Databases */

/* Utils */
/* End Utils */

@Module({
    controllers: [ClientsController],
    providers: [],
    exports: [],
})
export class ClientsModule { }