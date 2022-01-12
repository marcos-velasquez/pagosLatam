import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from '@core/components/prime-ng/services/toast.service';
import { StorageService } from '@core/services/storage.service';
import { AuthenticationService } from '@pages/authentication/services/authentication.service';
import { StreamingService } from '../../services/streaming.service';

@Component({
  selector: 'app-recharge-streaming',
  templateUrl: './recharge-streaming.component.html',
  styleUrls: ['./recharge-streaming.component.scss'],
})
export class RechargeStreamingComponent implements OnInit {
  form?: FormGroup;
  operators?: { name: string; value: string }[];
  amounts?: { name: string; value: number }[];

  constructor(
    private fb: FormBuilder,
    private streamingService: StreamingService,
    private storageService: StorageService,
    private toast: ToastService,
    private auth: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      reference: ['', Validators.required],
      photo: ['', Validators.required],
      charge: [[], Validators.required],
    });

    this.auth.currentUser().subscribe((user) => {
      this.form?.patchValue({ name: user?.displayName, phoneNumber: user?.phoneNumber });
    });
  }

  async onSubmit() {
    if (this.form?.valid) {
      try {
        const path = await this.storageService.upload(this.form?.value.photo);
        this.form.value.photo = path;
        await this.streamingService.create(this.form.value);
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
