import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '@core/components/components.module';
import { UpdatePhoneNumberComponent } from './components/update-phone-number/update-phone-number.component';

@NgModule({
  declarations: [UpdatePhoneNumberComponent],
  imports: [CommonModule, ComponentsModule, ReactiveFormsModule],
  exports: [UpdatePhoneNumberComponent],
})
export class UsersModule {}
