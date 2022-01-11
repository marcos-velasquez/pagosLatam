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
import { Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private basePath = 'users/';

  constructor(private firestore: Firestore) {}

  create(user: User) {
    const { id, ...data } = user;
    console.log(id);
    return setDoc(doc(this.firestore, this.basePath, id), data);
  }

  getOne(id: string) {
    return docData(doc(this.firestore, this.basePath + id), { idField: 'id' }) as Observable<User>;
  }

  update(id: string, data: Partial<User>) {
    return updateDoc(doc(this.firestore, this.basePath + id), data);
  }
}
