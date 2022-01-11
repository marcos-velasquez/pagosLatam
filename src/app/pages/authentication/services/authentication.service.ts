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
} from '@angular/fire/auth';
import { UsersService } from '../../../core/models/users/services/users.service';
import { UserLogin, UserRegister } from '../../../core/models/users/interfaces/user.interface';
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
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  withFacebook() {
    return signInWithPopup(this.auth, new FacebookAuthProvider());
  }

  withEmailAndPassword(user: UserLogin) {
    return signInWithEmailAndPassword(this.auth, user.email, user.password);
  }

  anonymously() {
    return signInAnonymously(this.auth);
  }

  register(user: UserRegister) {
    return new Promise((resolve, reject) => {
      createUserWithEmailAndPassword(this.auth, user.email, user.password)
        .then((res) => {
          if (res) {
            this.usersService
              .create({
                email: res.user.email!,
                phoneNumber: res.user.phoneNumber,
                id: res.user.uid,
                displayName: user.displayName!,
              })
              .then(resolve)
              .catch(reject);
          }
        })
        .catch(reject);
    });
  }

  logout() {
    return signOut(this.auth);
  }
}
