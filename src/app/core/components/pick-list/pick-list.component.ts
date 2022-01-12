import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Charge } from '@app/models/core/interface/charge.interface';
import { RegisterValueAccessor } from '@core/helpers/register-value-accessor.helper';

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
export class PickListComponent extends RegisterValueAccessor<Charge[]> implements OnInit, ControlValueAccessor {
  source: Charge[] = [
    {
      name: 'movistar',
      price: 15,
    },
  ];
  total = 0;

  constructor() {
    super();
  }

  ngOnInit(): void {}

  onMoveToSource() {
    this._onTouched();
    if (this.value?.length === 0) {
      this._onChange(null);
    } else {
      this._onChange(this.value);
    }
    this.updateTotal();
  }

  onMoveToTarget() {
    this._onTouched();
    this._onChange(this.value);
    this.updateTotal();
  }

  updateTotal() {
    this.total = this.value.reduce((acc, val) => acc + val.price, 0);
  }
}
