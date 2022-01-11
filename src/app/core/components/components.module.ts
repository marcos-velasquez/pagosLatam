import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { PickListComponent } from './pick-list/pick-list.component';
import { InputPhoneComponent } from './input-phone/input-phone.component';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [CommonModule, PrimeNgModule, FormsModule, NgxIntlTelInputModule],
  exports: [PrimeNgModule, ToolbarComponent, PickListComponent, InputPhoneComponent, FooterComponent],
  declarations: [ToolbarComponent, SidebarComponent, PickListComponent, InputPhoneComponent, FooterComponent],
})
export class ComponentsModule {}
