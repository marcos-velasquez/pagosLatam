import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { AuthenticationService } from '@pages/authentication/services/authentication.service';
import { RechargeService } from '@app/models/core/services/recharge.service';
import { Balance } from '../interfaces/balance.interface';

@Injectable({
  providedIn: 'root',
})
export class BalancesService extends RechargeService<Balance> {
  constructor(override firestore: Firestore, override auth: AuthenticationService) {
    super(firestore, auth);
  }

  get basePath() {
    return 'balances';
  }
}
