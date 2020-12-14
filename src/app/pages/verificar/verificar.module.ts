import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerificarPageRoutingModule } from './verificar-routing.module';

import { VerificarPage } from './verificar.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerificarPageRoutingModule,
    ComponentsModule
  ],
  declarations: [VerificarPage]
})
export class VerificarPageModule {}
