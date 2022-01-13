import { Component, Input, OnInit } from '@angular/core';
import { Charge } from '@app/models/core/interfaces/charge.interface';
import { RechargeModel } from '@app/models/core/interfaces/recharge-model.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() cols: { header: string; field: string }[] = [];
  @Input() data: any[] = [];
  charge: Charge[] = [];
  constructor() {}

  ngOnInit(): void {}

  showCharge(recharge: RechargeModel) {
    this.charge = recharge.charge;
  }
}
