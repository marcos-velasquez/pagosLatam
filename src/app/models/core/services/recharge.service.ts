import { addDoc, collection, Firestore, query, where, getDocs, DocumentData } from '@angular/fire/firestore';
import { Status } from '@app/models/core/enums/status.enum';
import { AuthenticationService } from '@pages/authentication/services/authentication.service';
import { RechargeService as Recharge } from '../interfaces/recharge-service.interface';
import { RechargeModel } from '../interfaces/recharge-model.interface';
import { QuerySnapshot } from 'rxfire/firestore/interfaces';

export abstract class RechargeService<T extends RechargeModel> implements Recharge<T> {
  constructor(protected firestore: Firestore, protected auth: AuthenticationService) {}

  create(data: T) {
    data.status = Status.PENDING;
    data.userId = this.auth.id;
    const ref = collection(this.firestore, this.basePath);
    return addDoc(ref, data);
  }

  getAllByCurrentUser(): Promise<T[]> {
    return new Promise((resolve, reject) => {
      const q = query(collection(this.firestore, this.basePath), where('userId', '==', this.auth.id));
      getDocs(q)
        .then((querySnapshot) => resolve(this.mapDocs(querySnapshot)))
        .catch(reject);
    });
  }

  private mapDocs(querySnapshot: QuerySnapshot<DocumentData>) {
    return querySnapshot.docs.map((doc) => doc.data()) as T[];
  }

  getAllWhere(data: Partial<T>): Promise<T[]> {
    return new Promise((resolve, reject) => {
      const conditions = Object.entries(data).map(([key, value]) => where(key, '==', value));
      const q = query(collection(this.firestore, this.basePath), ...conditions);
      getDocs(q)
        .then((querySnapshot) => resolve(this.mapDocs(querySnapshot)))
        .catch(reject);
    });
  }

  protected abstract get basePath();
}
