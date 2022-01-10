import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ComponentsModule } from '@core/components/components.module';
import { RechargeBalanceComponent } from './components/recharge-balance/recharge-balance.component';

@NgModule({
  declarations: [DashboardComponent, RechargeBalanceComponent],
  imports: [DashboardRoutingModule, CommonModule, ComponentsModule],
})
export class DashboardModule {}
