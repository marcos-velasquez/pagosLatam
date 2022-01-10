import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { RechargeBalanceComponent } from './components/recharge-balance/recharge-balance.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private dialogService: DialogService) {}

  ngOnInit(): void {}

  rechargeBalance() {
    this.dialogService.open(RechargeBalanceComponent, { header: 'RECARGAR SALDO', width: '70%' });
  }
}
