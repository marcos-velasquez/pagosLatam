import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ComponentsModule } from '@core/components/components.module';
import { HomeComponent } from './pages/home/home.component';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [DashboardComponent, HomeComponent],
  imports: [DashboardRoutingModule, CommonModule, ComponentsModule, PagesModule, ReactiveFormsModule],
})
export class DashboardModule {}
