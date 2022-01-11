import { NgModule } from '@angular/core';
import { BalancesModule } from './balance/balances.module';
import { UsersModule } from './users/users.module';
@NgModule({
  imports: [UsersModule, BalancesModule],
})
export class ModelsModule {}
