import { Module } from '@nestjs/common';
import { OrdersModule } from './modules/OrdersModule';

@Module({
  imports: [OrdersModule],
})
export class AppModule {}
