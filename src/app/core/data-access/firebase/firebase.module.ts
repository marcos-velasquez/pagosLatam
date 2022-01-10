import { NgModule } from '@angular/core';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';

@NgModule({
  imports: [provideAuth(() => getAuth()), provideFirebaseApp(() => initializeApp(environment.firebaseConfig))],
})
export class FirebaseModule {}
