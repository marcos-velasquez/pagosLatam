import { Component, forwardRef, OnInit } from '@angular/core';
import { CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { RegisterValueAccessor } from '@core/helpers/register-value-accessor.helper';

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
export class InputPhoneComponent extends RegisterValueAccessor<number> implements OnInit, ControlValueAccessor {
  CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;

  constructor() {
    super();
  }

  ngOnInit(): void {}

  onChange() {
    this._onTouched();
    this._onChange(this.value?.['e164Number']);
  }
}
