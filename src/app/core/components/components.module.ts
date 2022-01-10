import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { PickListComponent } from './pick-list/pick-list.component';

@NgModule({
  imports: [CommonModule, PrimeNgModule, FormsModule],
  exports: [PrimeNgModule, ToolbarComponent, PickListComponent],
  declarations: [ToolbarComponent, SidebarComponent, PickListComponent],
})
export class ComponentsModule {}
