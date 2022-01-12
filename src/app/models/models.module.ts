import { NgModule } from '@angular/core';
import { BalancesModule } from './balances/balances.module';
import { StreamingModule } from './streaming/streaming.module';
import { UsersModule } from './users/users.module';
import { VideogamesModule } from './videogames/videogames.module';

@NgModule({
  imports: [UsersModule, BalancesModule, StreamingModule, VideogamesModule],
})
export class ModelsModule {}
