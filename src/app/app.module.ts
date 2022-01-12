import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentsModule } from '@core/components/components.module';
import { FirebaseModule } from '@core/data-access/firebase/firebase.module';
import { ModelsModule } from '@models/models.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, FirebaseModule, ComponentsModule, ModelsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
