import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '@core/components/components.module';
import { HistoryComponent } from './history.component';
import { HistoryRoutingModule } from './hisotry-routing.module';
import { GlobalSearchComponent } from './components/global-search/global-search.component';
import { ListChargeComponent } from './components/list-charge/list-charge.component';

@NgModule({
  declarations: [HistoryComponent, GlobalSearchComponent, ListChargeComponent],
  imports: [HistoryRoutingModule, CommonModule, ComponentsModule, ReactiveFormsModule],
})
export class HistoryModule {}
