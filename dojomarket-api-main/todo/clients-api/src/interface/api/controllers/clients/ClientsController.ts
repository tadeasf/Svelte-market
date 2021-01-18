import { Controller, Get, Res } from '@nestjs/common';

@Controller('/clients')
export class ClientsController {
    constructor() { }

    @Get()
    async getClients(
        @Res() res: any,
    ): Promise<any> {
        return res.status(200).json({ data: 'Hello World '});
    }
}
