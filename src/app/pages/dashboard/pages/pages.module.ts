import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '@core/components/components.module';
import { RechargeStreamingComponent } from './recharge-streaming/recharge-streaming.component';
import { RechargeBalanceComponent } from './recharge-balance/recharge-balance.component';
import { RechargeVideogameComponent } from './recharge-videogame/recharge-videogame.component';

@NgModule({
  declarations: [RechargeBalanceComponent, RechargeStreamingComponent, RechargeVideogameComponent],
  imports: [CommonModule, ComponentsModule],
})
export class PagesModule {}
