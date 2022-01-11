import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '@pages/authentication/services/authentication.service';
import { UsersService } from '@core/models/users/services/users.service';
import { ToastService } from '@core/components/prime-ng/services/toast.service';

@Component({
  selector: 'app-update-phone-number',
  templateUrl: './update-phone-number.component.html',
  styleUrls: ['./update-phone-number.component.scss'],
})
export class UpdatePhoneNumberComponent implements OnInit {
  form?: FormGroup;

  constructor(
    private fb: FormBuilder,
    private usersService: UsersService,
    private auth: AuthenticationService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({ phoneNumber: ['', [Validators.required]] });
    this.auth.currentUser().subscribe((user) => {
      this.form?.patchValue({ phoneNumber: user?.phoneNumber });
    });
  }

  onSubmit() {
    if (this.form?.valid) {
      this.usersService
        .update(this.auth.id!, this.form?.value)
        .then(() => this.toast.info('TELÉFONO ACTUALIADO'))
        .catch((error) => this.toast.error(error.code));
    }
  }
}
