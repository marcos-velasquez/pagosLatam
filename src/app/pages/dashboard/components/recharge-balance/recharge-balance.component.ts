import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recharge-balance',
  templateUrl: './recharge-balance.component.html',
  styleUrls: ['./recharge-balance.component.scss'],
})
export class RechargeBalanceComponent implements OnInit {
  operators?: { name: string; value: string }[];
  amounts?: { name: string; value: number }[];
  constructor() {}

  ngOnInit(): void {
    this.operators = [
      { name: 'MOVISTAR', value: 'MOVISTAR' },
      { name: 'MOVILNET', value: 'MOVILNET' },
      { name: 'DIGITEL', value: 'DIGITEL' },
    ];

    this.amounts = [
      { name: '5000', value: 5000 },
      { name: '10000', value: 10000 },
      { name: '20000', value: 20000 },
      { name: '30000', value: 30000 },
    ];
  }
}
