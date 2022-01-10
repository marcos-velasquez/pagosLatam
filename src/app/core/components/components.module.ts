import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, PrimeNgModule, FormsModule],
  exports: [PrimeNgModule, ToolbarComponent],
  declarations: [ToolbarComponent, SidebarComponent],
})
export class ComponentsModule {}
