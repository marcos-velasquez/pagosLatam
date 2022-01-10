import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthenticationService } from '@pages/authentication/services/authentication.service';
import { ToastService } from '@core/components/prime-ng/services/toast.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  showSidebar = false;
  items?: MenuItem[];

  constructor(private auth: AuthenticationService, private toast: ToastService) {}

  ngOnInit() {
    this.items = [
      {
        label: 'Salir',
        icon: 'pi pi-sign-out',
        command: () => {
          this.auth
            .logout()
            .then(() => location.reload())
            .catch((error) => this.toast.error(error.code));
        },
      },
    ];
  }
}
