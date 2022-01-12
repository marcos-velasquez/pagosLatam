import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BalancesService } from '@models/balances/services/balances.service';
import { StorageService } from '@core/services/storage.service';
import { ToastService } from '@core/components/prime-ng/services/toast.service';
import { AuthenticationService } from '@pages/authentication/services/authentication.service';

@Component({
  selector: 'app-recharge-balance',
  templateUrl: './recharge-balance.component.html',
  styleUrls: ['./recharge-balance.component.scss'],
})
export class RechargeBalanceComponent implements OnInit {
  form?: FormGroup;
  operators?: { name: string; value: string }[];
  amounts?: { name: string; value: number }[];

  constructor(
    private fb: FormBuilder,
    private balancesService: BalancesService,
    private storageService: StorageService,
    private toast: ToastService,
    private auth: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      phoneTarget: ['', Validators.required],
      reference: ['', Validators.required],
      photo: ['', Validators.required],
      charge: [[], Validators.required],
    });

    this.auth.currentUser().subscribe((user) => {
      this.form?.patchValue({ name: user?.displayName, phoneNumber: user?.phoneNumber });
    });
  }

  async onSubmit() {
    if (this.form?.valid) {
      try {
        const path = await this.storageService.upload(this.form?.value.photo);
        this.form.value.photo = path;
        await this.balancesService.create(this.form.value);
        this.toast.success('PEDIDO REALIZADO CORRECTAMENTE');
      } catch (error: any) {
        this.toast.error(error.code);
      }
    }
  }

  onChangeFile(event: any) {
    if (event.target.files.length > 0) {
      this.form!.patchValue({ photo: event.target.files[0] });
    }
  }
}
