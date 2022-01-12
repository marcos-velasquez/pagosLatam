import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { AuthenticationService } from '@pages/authentication/services/authentication.service';
import { ToastService } from '@core/components/prime-ng/services/toast.service';
import { ProfileComponent } from '@core/models/users/components/profile/profile.component';
import { User } from '@core/models/users/interfaces/user.interface';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  user: User | null = null;
  showSidebar = false;
  items?: MenuItem[];

  constructor(private auth: AuthenticationService, private toast: ToastService, private dialogService: DialogService) {}

  ngOnInit() {
    this.auth.currentUser().subscribe((user) => (this.user = user));
    this.items = [
      {
        label: 'Perfil',
        icon: 'pi pi-user-edit',
        command: () => {
          this.dialogService.open(ProfileComponent, {
            width: '70%',
            height: '450px',
            header: 'PERFIL',
          });
        },
      },
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
