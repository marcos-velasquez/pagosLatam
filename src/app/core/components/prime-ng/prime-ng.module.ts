import { NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DividerModule } from 'primeng/divider';
import { RippleModule } from 'primeng/ripple';
import { PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToolbarModule } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
import { SidebarModule } from 'primeng/sidebar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TabMenuModule } from 'primeng/tabmenu';
import { DynamicDialogModule, DialogService } from 'primeng/dynamicdialog';
import { DropdownModule } from 'primeng/dropdown';
import { SelectButtonModule } from 'primeng/selectbutton';
import { PickListModule } from 'primeng/picklist';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TableModule } from 'primeng/table';
import { ImageModule } from 'primeng/image';
import { TagModule } from 'primeng/tag';
import { DialogModule } from 'primeng/dialog';
import { OrderListModule } from 'primeng/orderlist';

const MODULES = [
  CardModule,
  ButtonModule,
  InputTextModule,
  DividerModule,
  RippleModule,
  PasswordModule,
  ToastModule,
  ToolbarModule,
  AvatarModule,
  SidebarModule,
  SplitButtonModule,
  TabMenuModule,
  DynamicDialogModule,
  DropdownModule,
  SelectButtonModule,
  PickListModule,
  ConfirmDialogModule,
  TableModule,
  ImageModule,
  TagModule,
  DialogModule,
  OrderListModule,
];

@NgModule({
  providers: [MessageService, DialogService, ConfirmationService],
  imports: MODULES,
  exports: [...MODULES],
})
export class PrimeNgModule {}
