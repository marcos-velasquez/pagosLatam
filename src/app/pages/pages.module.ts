import { NgModule } from '@angular/core';
import { AuthenticationModule } from './authentication/authentication.module';

const MODULES = [AuthenticationModule];

@NgModule({
  imports: MODULES,
  exports: MODULES,
})
export class PagesModule {}
