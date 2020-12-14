import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MundoPageRoutingModule } from './mundo-routing.module';

import { MundoPage } from './mundo.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MundoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MundoPage]
})
export class MundoPageModule {}
