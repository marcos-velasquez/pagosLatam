import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { RechargeService } from '@app/models/core/services/recharge.service';
import { AuthenticationService } from '@pages/authentication/services/authentication.service';
import { Streaming } from '../interfaces/streaming.interface';

@Injectable({
  providedIn: 'root',
})
export class StreamingService extends RechargeService<Streaming> {
  constructor(override firestore: Firestore, override auth: AuthenticationService) {
    super(firestore, auth);
  }

  get basePath() {
    return 'streaming';
  }
}
