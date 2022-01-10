import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialsComponent } from './socials/socials.component';
import { ComponentsModule as GlobalComponentsModule } from '@core/components/components.module';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [SocialsComponent, CardComponent],
  imports: [CommonModule, GlobalComponentsModule],
  exports: [SocialsComponent, CardComponent],
})
export class ComponentsModule {}
