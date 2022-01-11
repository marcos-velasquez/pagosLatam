import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { RechargeStreamingComponent as Dialog } from '@pages/dashboard/components/recharge-streaming/recharge-streaming.component';

@Component({
  selector: 'app-recharge-streaming',
  templateUrl: './recharge-streaming.component.html',
  styleUrls: ['./recharge-streaming.component.scss'],
})
export class RechargeStreamingComponent implements OnInit {
  constructor(private dialogService: DialogService) {}

  ngOnInit(): void {}

  recharge() {
    this.dialogService.open(Dialog, { header: 'RECARGAR STREAMING', width: '80%', height: '100%' });
  }
}
