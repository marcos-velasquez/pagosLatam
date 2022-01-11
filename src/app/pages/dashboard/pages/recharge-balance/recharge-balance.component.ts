import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { RechargeBalanceComponent as Dialog } from '@core/models/balance/components/recharge-balance/recharge-balance.component';

@Component({
  selector: 'app-recharge-balance',
  templateUrl: './recharge-balance.component.html',
  styleUrls: ['./recharge-balance.component.scss'],
})
export class RechargeBalanceComponent implements OnInit {
  constructor(private dialogService: DialogService) {}

  ngOnInit(): void {}

  recharge() {
    this.dialogService.open(Dialog, { header: 'RECARGAR SALDO', width: '100%', height: '100%' });
  }
}
