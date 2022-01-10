import { NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DividerModule } from 'primeng/divider';
import { RippleModule } from 'primeng/ripple';
import { PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

const MODULES = [CardModule, ButtonModule, InputTextModule, DividerModule, RippleModule, PasswordModule, ToastModule];

@NgModule({
  providers: [MessageService],
  imports: MODULES,
  exports: [...MODULES],
})
export class PrimeNgModule {}
