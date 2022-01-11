import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '@core/components/prime-ng/prime-ng.module';
import { ToolbarComponent } from './toolbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AvatarLabelPipe } from './pipes/avatar-label.pipe';
import { CredentialLabelPipe } from './pipes/credential-label.pipe';

@NgModule({
  declarations: [ToolbarComponent, SidebarComponent, AvatarLabelPipe, CredentialLabelPipe],
  imports: [CommonModule, PrimeNgModule],
  exports: [ToolbarComponent],
})
export class ToolbarModule {}
