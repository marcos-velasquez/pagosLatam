import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Charge } from '@core/interfaces/charge.interface';

@Component({
  selector: 'app-pick-list',
  templateUrl: './pick-list.component.html',
  styleUrls: ['./pick-list.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PickListComponent),
      multi: true,
    },
  ],
})
export class PickListComponent implements OnInit, ControlValueAccessor {
  target: Charge[] = [];
  source: Charge[] = [
    {
      name: 'movistar',
      price: 15,
    },
  ];
  total = 0;
  _onChange!: (_: any) => void;
  _onTouched!: () => void;

  constructor() {}

  ngOnInit(): void {}

  onMoveToSource() {
    this._onTouched();
    if (this.target?.length === 0) {
      this._onChange(null);
    } else {
      this._onChange(this.target);
    }
    this.updateTotal();
  }

  onMoveToTarget() {
    this._onTouched();
    this._onChange(this.target);
    this.updateTotal();
  }

  updateTotal() {
    this.total = this.target.reduce((acc, val) => acc + val.price, 0);
  }

  writeValue(charge: Charge[]) {
    this.target = charge;
  }

  registerOnChange(fn: (_: any) => void) {
    this._onChange = fn;
  }

  registerOnTouched(fn: () => void) {
    this._onTouched = fn;
  }
}
