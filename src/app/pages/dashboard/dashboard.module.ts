import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ComponentsModule } from '@core/components/components.module';
import { RechargeBalanceComponent } from './components/recharge-balance/recharge-balance.component';
import { RechargeStreamingComponent } from './components/recharge-streaming/recharge-streaming.component';
import { RechargeVideogameComponent } from './components/recharge-videogame/recharge-videogame.component';
import { HomeComponent } from './pages/home/home.component';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    DashboardComponent,
    RechargeBalanceComponent,
    RechargeStreamingComponent,
    RechargeVideogameComponent,
    HomeComponent,
  ],
  imports: [DashboardRoutingModule, CommonModule, ComponentsModule, PagesModule],
})
export class DashboardModule {}
