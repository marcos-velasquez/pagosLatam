import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FirebaseModule } from '@core/data-access/firebase/firebase.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, FirebaseModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
