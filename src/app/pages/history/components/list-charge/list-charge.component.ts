import { Component, Input, OnInit } from '@angular/core';
import { Charge } from '@app/models/core/interfaces/charge.interface';

@Component({
  selector: 'app-list-charge',
  templateUrl: './list-charge.component.html',
  styleUrls: ['./list-charge.component.scss'],
})
export class ListChargeComponent {
  display = false;

  _charge = null;
  get charge() {
    return this._charge;
  }
  @Input() set charge(value: Charge[]) {
    this._charge = value;
    if (this._charge.length > 0) {
      this.display = true;
    }
  }

  constructor() {}
}
