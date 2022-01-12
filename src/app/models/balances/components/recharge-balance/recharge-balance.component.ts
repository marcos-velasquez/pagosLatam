import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BalancesService } from '@models/balances/services/balances.service';
import { StorageService } from '@core/services/storage.service';
import { ToastService } from '@core/components/prime-ng/services/toast.service';
import { AuthenticationService } from '@pages/authentication/services/authentication.service';
import { Recharge } from '@app/models/core/components/recharge.component';
import { Balance } from '../../interfaces/balance.interface';
import { ConfirmationService } from 'primeng/api';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-recharge-balance',
  templateUrl: './recharge-balance.component.html',
  styleUrls: ['./recharge-balance.component.scss'],
})
export class RechargeBalanceComponent extends Recharge<Balance> implements OnInit {
  constructor(
    private fb: FormBuilder,
    override storageService: StorageService,
    override toast: ToastService,
    override auth: AuthenticationService,
    override confirmationService: ConfirmationService,
    override ref: DynamicDialogRef,
    balancesService: BalancesService
  ) {
    super(storageService, auth, balancesService, toast, confirmationService, ref);
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      phoneTarget: ['', Validators.required],
      reference: ['', Validators.required],
      photo: ['', Validators.required],
      charge: [[], Validators.required],
    });

    this.patchDefaultValues();
  }
}
