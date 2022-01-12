import { Injectable, Type } from '@angular/core';
import { DialogService as Service } from 'primeng/dynamicdialog';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(private service: Service) {}

  open(component: Type<any>, header: string) {
    this.service.open(component, {
      header,
      width: '80%',
      height: '100%',
      baseZIndex: 100,
      autoZIndex: false,
    });
  }
}
