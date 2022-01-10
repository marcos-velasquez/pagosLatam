import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { AuthenticationService } from '@pages/authentication/services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isUserLogin = false;

  constructor(private primengConfig: PrimeNGConfig, private auth: AuthenticationService) {}

  ngOnInit() {
    this.auth.currentUser().subscribe((user) => (this.isUserLogin = Boolean(user)));
    this.primengConfig.ripple = true;
  }
}
