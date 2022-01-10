import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '@core/components/components.module';
import { HistoryComponent } from './history.component';
import { HistoryRoutingModule } from './hisotry-routing.module';

@NgModule({
  declarations: [HistoryComponent],
  imports: [HistoryRoutingModule, CommonModule, ComponentsModule],
})
export class HistoryModule {}
