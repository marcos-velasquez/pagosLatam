import { NgModule } from '@angular/core';
import { BalancesModule } from './balances/balances.module';
import { StreamingModule } from './streaming/streaming.module';
import { UsersModule } from './users/users.module';
@NgModule({
  imports: [UsersModule, BalancesModule, StreamingModule],
})
export class ModelsModule {}
