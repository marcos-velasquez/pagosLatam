import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from '@core/components/prime-ng/services/toast.service';
import { AuthenticationService } from '@pages/authentication/services/authentication.service';

@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.scss'],
})
export class SocialsComponent implements OnInit {
  constructor(
    private readonly authenticationService: AuthenticationService,
    private toast: ToastService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  withGoogle() {
    this.authenticationService
      .withGoogle()
      .then(() => this.router.navigate(['dashboard']))
      .catch((error) => this.toast.error(error.code));
  }

  withFacebook() {
    this.authenticationService
      .withFacebook()
      .then(() => this.router.navigate(['dashboard']))
      .catch((error) => this.toast.error(error.code));
  }
}
