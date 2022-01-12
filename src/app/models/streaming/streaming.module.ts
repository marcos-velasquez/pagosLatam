import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RechargeStreamingComponent } from './components/recharge-streaming/recharge-streaming.component';
import { ComponentsModule } from '@core/components/components.module';

@NgModule({
  declarations: [RechargeStreamingComponent],
  imports: [CommonModule, ComponentsModule, ReactiveFormsModule],
})
export class StreamingModule {}
