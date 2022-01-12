import { FormGroup } from '@angular/forms';
import { ToastService } from '@core/components/prime-ng/services/toast.service';
import { StorageService } from '@core/services/storage.service';
import { AuthenticationService } from '@pages/authentication/services/authentication.service';
import { RechargeService } from '../interface/recharge-service.interface';

export abstract class Recharge<T> {
  form: FormGroup;

  constructor(
    protected storageService: StorageService,
    protected auth: AuthenticationService,
    protected service: RechargeService<T>,
    protected toast: ToastService
  ) {}

  patchDefaultValues(): void {
    this.auth.currentUser().subscribe((user) => {
      this.form?.patchValue({ name: user?.displayName, phoneNumber: user?.phoneNumber });
    });
  }

  async onSubmit() {
    if (this.form?.valid) {
      try {
        const path = await this.storageService.upload(this.form?.value.photo);
        this.form.value.photo = path;
        await this.service.create(this.form.value);
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