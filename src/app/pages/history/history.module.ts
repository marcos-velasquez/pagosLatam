import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryComponent } from './history.component';
import { HistoryRoutingModule } from './hisotry-routing.module';

@NgModule({
  declarations: [HistoryComponent],
  imports: [HistoryRoutingModule, CommonModule],
})
export class HistoryModule {}
