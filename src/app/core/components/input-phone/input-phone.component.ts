import { Component, forwardRef, OnInit } from '@angular/core';
import { CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-phone',
  templateUrl: './input-phone.component.html',
  styleUrls: ['./input-phone.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputPhoneComponent),
      multi: true,
    },
  ],
})
export class InputPhoneComponent implements OnInit, ControlValueAccessor {
  currentValue?: any;
  _onChange!: (_: any) => void;
  _onTouched!: () => void;

  CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;

  constructor() {}

  ngOnInit(): void {}

  onChange() {
    this._onTouched();
    this._onChange(this.currentValue?.['e164Number']);
  }

  writeValue(value: number) {
    this.currentValue = value;
  }

  registerOnChange(fn: (_: any) => void) {
    this._onChange = fn;
  }

  registerOnTouched(fn: () => void) {
    this._onTouched = fn;
  }
}
