import { Component, OnInit } from '@angular/core';
import { DialogService } from '@core/components/prime-ng/services/dialog.service';
import { RechargeStreamingComponent as Dialog } from '@models/streaming/components/recharge-streaming/recharge-streaming.component';

@Component({
  selector: 'app-recharge-streaming',
  templateUrl: './recharge-streaming.component.html',
  styleUrls: ['./recharge-streaming.component.scss'],
})
export class RechargeStreamingComponent implements OnInit {
  constructor(private dialogService: DialogService) {}

  ngOnInit(): void {}

  recharge() {
    this.dialogService.open(Dialog, 'RECARGAR STREAMING');
  }
}
