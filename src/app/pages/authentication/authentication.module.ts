import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthenticationComponent } from './authentication.component';
import { ComponentsModule as GlobalComponentsModule } from '@core/components/components.module';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { ComponentsModule } from './components/components.module';
import { TogglePasswordDirective } from './directives/toggle-password.directive';

@NgModule({
  declarations: [AuthenticationComponent, LoginComponent, RegisterComponent, TogglePasswordDirective],
  imports: [CommonModule, AuthenticationRoutingModule, GlobalComponentsModule, ComponentsModule, ReactiveFormsModule],
})
export class AuthenticationModule {}
