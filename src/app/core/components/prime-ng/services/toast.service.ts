import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private messageService: MessageService) {}

  warn(message: string) {
    this.show(message, { severity: 'warn', summary: 'Warn' });
  }

  success(message: string) {
    this.show(message, { severity: 'success', summary: 'Success' });
  }

  info(message: string) {
    this.show(message, { severity: 'info', summary: 'Info' });
  }

  error(message: string) {
    console.log(message);
    this.show(message, { severity: 'error', summary: 'Error' });
  }

  private show(message: string, options: { severity: string; summary: string }) {
    this.messageService.add({ ...options, detail: message.toUpperCase() });
  }
}
