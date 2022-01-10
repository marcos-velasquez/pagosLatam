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
} from '@angular/fire/auth';
import { UserLogin } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(@Optional() private auth: Auth) {}

  currentUser() {
    return authState(this.auth);
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

  register(user: UserLogin) {
    return createUserWithEmailAndPassword(this.auth, user.email, user.password);
  }

  logout() {
    return signOut(this.auth);
  }
}
