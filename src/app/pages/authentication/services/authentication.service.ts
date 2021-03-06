import { Injectable, Optional } from '@angular/core';
import {
  Auth,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  signInWithEmailAndPassword,
  signInAnonymously,
  createUserWithEmailAndPassword,
  authState,
  getAuth,
  UserCredential,
} from '@angular/fire/auth';
import { UsersService } from '@models/users/services/users.service';
import { UserLogin, UserRegister } from '@models/users/interfaces/user.interface';
import { UserBuilder } from '@app/models/users/services/user-builder.service';
import { of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(@Optional() private auth: Auth, private usersService: UsersService) {}

  currentUser() {
    return authState(this.auth).pipe(
      switchMap((user) => {
        if (user) {
          return this.usersService.getOne(user.uid);
        } else {
          return of(null);
        }
      })
    );
  }

  get id() {
    return getAuth().currentUser?.uid;
  }

  withGoogle() {
    return new Promise((resolve, reject) => {
      signInWithPopup(this.auth, new GoogleAuthProvider())
        .then((res) => this.createIfNotExists(res).then(resolve).catch(reject))
        .catch(reject);
    });
  }

  private createIfNotExists(res: UserCredential) {
    return new Promise((resolve, reject) => {
      this.usersService.getOne(res.user.uid).subscribe({
        next: (user) => {
          user ? resolve(user) : this.usersService.create(new UserBuilder(res.user)).then(resolve).catch(reject);
        },
        error: reject,
      });
    });
  }

  withFacebook() {
    return new Promise((resolve, reject) => {
      signInWithPopup(this.auth, new FacebookAuthProvider())
        .then((res) => this.createIfNotExists(res).then(resolve).catch(reject))
        .catch(reject);
    });
  }

  withEmailAndPassword(user: UserLogin) {
    return signInWithEmailAndPassword(this.auth, user.email, user.password);
  }

  anonymously() {
    return new Promise((resolve, reject) => {
      signInAnonymously(this.auth)
        .then((res) => this.createIfNotExists(res).then(resolve).catch(reject))
        .catch(reject);
    });
  }

  register(user: UserRegister) {
    return new Promise((resolve, reject) => {
      createUserWithEmailAndPassword(this.auth, user.email, user.password)
        .then((res) => this.usersService.create(new UserBuilder(res.user)).then(resolve).catch(reject))
        .catch(reject);
    });
  }

  logout() {
    return signOut(this.auth);
  }
}
