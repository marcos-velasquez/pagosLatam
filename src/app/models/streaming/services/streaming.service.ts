import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { RechargeService } from '@app/models/core/services/recharge.service';
import { AuthenticationService } from '@pages/authentication/services/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class StreamingService extends RechargeService {
  constructor(override firestore: Firestore, override auth: AuthenticationService) {
    super(firestore, auth);
  }

  get basePath() {
    return 'streaming';
  }
}
