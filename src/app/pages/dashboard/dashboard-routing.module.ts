import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { RechargeBalanceComponent } from './pages/recharge-balance/recharge-balance.component';
import { RechargeVideogameComponent } from './pages/recharge-videogame/recharge-videogame.component';
import { RechargeStreamingComponent } from './pages/recharge-streaming/recharge-streaming.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'categorias',
        component: HomeComponent,
      },
      {
        path: 'saldo',
        component: RechargeBalanceComponent,
      },
      {
        path: 'streaming',
        component: RechargeStreamingComponent,
      },
      {
        path: 'videojuegos',
        component: RechargeVideogameComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
