import { NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DividerModule } from 'primeng/divider';
import { RippleModule } from 'primeng/ripple';

const MODULES = [CardModule, ButtonModule, InputTextModule, DividerModule, RippleModule];

@NgModule({
  imports: MODULES,
  exports: MODULES,
})
export class PrimeNgModule {}
