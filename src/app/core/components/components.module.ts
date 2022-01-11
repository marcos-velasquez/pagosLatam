import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { FormsModule } from '@angular/forms';
import { ToolbarModule } from './toolbar/toolbar.module';
import { PickListComponent } from './pick-list/pick-list.component';
import { InputPhoneComponent } from './input-phone/input-phone.component';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [CommonModule, PrimeNgModule, FormsModule, NgxIntlTelInputModule, ToolbarModule],
  exports: [PrimeNgModule, PickListComponent, InputPhoneComponent, FooterComponent, ToolbarModule],
  declarations: [PickListComponent, InputPhoneComponent, FooterComponent],
})
export class ComponentsModule {}
