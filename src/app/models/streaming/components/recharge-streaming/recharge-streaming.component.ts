import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Recharge } from '@app/models/core/components/recharge.component';
import { ToastService } from '@core/components/prime-ng/services/toast.service';
import { StorageService } from '@core/services/storage.service';
import { AuthenticationService } from '@pages/authentication/services/authentication.service';
import { Streaming } from '../../interfaces/streaming.interface';
import { StreamingService } from '../../services/streaming.service';

@Component({
  selector: 'app-recharge-streaming',
  templateUrl: './recharge-streaming.component.html',
  styleUrls: ['./recharge-streaming.component.scss'],
})
export class RechargeStreamingComponent extends Recharge<Streaming> implements OnInit {
  constructor(
    private fb: FormBuilder,
    override storageService: StorageService,
    override toast: ToastService,
    override auth: AuthenticationService,
    streamingService: StreamingService
  ) {
    super(storageService, auth, streamingService, toast);
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      reference: ['', Validators.required],
      photo: ['', Validators.required],
      charge: [[], Validators.required],
    });

    this.patchDefaultValues();
  }
}
