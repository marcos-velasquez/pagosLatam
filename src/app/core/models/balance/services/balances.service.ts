import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  doc,
  docData,
  addDoc,
  deleteDoc,
  updateDoc,
  setDoc,
} from '@angular/fire/firestore';
import { Balance } from '../interfaces/balance.interface';
import { AuthenticationService } from '@pages/authentication/services/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class BalancesService {
  private basePath = 'balances';

  constructor(private firestore: Firestore, private auth: AuthenticationService) {}

  create(balance: Balance) {
    const ref = collection(this.firestore, 'users/' + this.auth.id + '/' + this.basePath);
    return addDoc(ref, balance);
  }

  /* getOne(id: string) {
    return docData(doc(this.firestore, this.basePath + id), { idField: 'id' }) as Observable<User>;
  }

  update(id: string, data: Partial<User>) {
    return updateDoc(doc(this.firestore, this.basePath + id), data);
  } */
}
