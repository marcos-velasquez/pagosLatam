import { Component, OnInit } from '@angular/core';
import { ToastService } from '@core/components/prime-ng/services/toast.service';
import { AuthenticationService } from '@pages/authentication/services/authentication.service';

@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.scss'],
})
export class SocialsComponent implements OnInit {
  constructor(private readonly authenticationService: AuthenticationService, private toast: ToastService) {}

  ngOnInit(): void {}

  withGoogle() {
    this.authenticationService
      .withGoogle()
      .then(console.log)
      .catch((error) => this.toast.error(error.code));
  }

  withFacebook() {
    this.authenticationService
      .withFacebook()
      .then(console.log)
      .catch((error) => this.toast.error(error.code));
  }
}
