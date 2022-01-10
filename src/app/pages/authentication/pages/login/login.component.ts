import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from '@core/components/prime-ng/services/toast.service';
import { AuthenticationService } from '@pages/authentication/services/authentication.service';
import { FormValidatorService } from '@core/services/form-validator.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form?: FormGroup;
  formValidatorService?: FormValidatorService;

  constructor(
    private readonly auth: AuthenticationService,
    private fb: FormBuilder,
    private toast: ToastService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
    this.formValidatorService = new FormValidatorService(this.form);
  }

  onSubmit() {
    if (this.form?.valid) {
      this.auth
        .withEmailAndPassword(this.form.value)
        .then(() => {
          this.toDashboard();
        })
        .catch((error) => this.toast.error(error.code));
    }
  }

  anonymously() {
    this.auth
      .anonymously()
      .then(() => {
        this.toDashboard();
      })
      .catch((error) => this.toast.error(error.code));
  }

  private toDashboard() {
    this.router.navigate(['dashboard']);
  }
}
