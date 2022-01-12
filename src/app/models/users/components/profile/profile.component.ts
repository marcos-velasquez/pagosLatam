import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '@pages/authentication/services/authentication.service';
import { UsersService } from '@models/users/services/users.service';
import { ToastService } from '@core/components/prime-ng/services/toast.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  form?: FormGroup;

  constructor(
    private fb: FormBuilder,
    private usersService: UsersService,
    private auth: AuthenticationService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({ phoneNumber: ['', [Validators.required]], displayName: ['', [Validators.required]] });
    this.auth.currentUser().subscribe((user) => {
      this.form?.patchValue({ phoneNumber: user?.phoneNumber, displayName: user?.displayName });
    });
  }

  onSubmit() {
    if (this.form?.valid) {
      this.usersService
        .update(this.auth.id!, this.form?.value)
        .then(() => this.toast.info('PERFIL ACTUALIADO'))
        .catch((error) => this.toast.error(error.code));
    }
  }
}
