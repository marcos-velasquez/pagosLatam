import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RechargeBalanceComponent } from './components/recharge-balance/recharge-balance.component';
import { ComponentsModule } from '@core/components/components.module';

@NgModule({
  declarations: [RechargeBalanceComponent],
  imports: [CommonModule, ComponentsModule, ReactiveFormsModule],
})
export class BalancesModule {}
