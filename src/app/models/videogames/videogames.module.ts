import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '@core/components/components.module';
import { RechargeVideogameComponent } from './components/recharge-videogame/recharge-videogame.component';

@NgModule({
  declarations: [RechargeVideogameComponent],
  imports: [CommonModule, ComponentsModule, ReactiveFormsModule],
})
export class VideogamesModule {}
