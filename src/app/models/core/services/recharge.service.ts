import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import { Status } from '@app/models/core/enums/status.enum';
import { AuthenticationService } from '@pages/authentication/services/authentication.service';
import { RechargeService as Recharge } from '../interface/recharge-service.interface';
import { RechargeModel } from '../interface/recharge-model.interface';

export abstract class RechargeService implements Recharge<RechargeModel> {
  constructor(protected firestore: Firestore, protected auth: AuthenticationService) {}

  create(data: RechargeModel) {
    data.status = Status.PENDING;
    const ref = collection(this.firestore, 'users/' + this.auth.id + '/' + this.basePath);
    return addDoc(ref, data);
  }

  protected abstract get basePath();
}
