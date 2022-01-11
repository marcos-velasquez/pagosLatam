import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormValidatorService } from '@core/services/form-validator.service';
import { AuthenticationService } from '@pages/authentication/services/authentication.service';
import { ToastService } from '@core/components/prime-ng/services/toast.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form?: FormGroup;
  formValidatorService?: FormValidatorService;

  constructor(
    private fb: FormBuilder,
    private auth: AuthenticationService,
    private toast: ToastService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        displayName: ['', [Validators.required]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
      },
      { validators: [FormValidatorService.confirmPassword] }
    );
    this.formValidatorService = new FormValidatorService(this.form);
  }

  onSubmit() {
    if (this.form?.valid) {
      this.auth
        .register(this.form.value)
        .then(() => this.router.navigate(['dashboard']))
        .catch((error) => this.toast.error(error.code));
    }
  }
}
