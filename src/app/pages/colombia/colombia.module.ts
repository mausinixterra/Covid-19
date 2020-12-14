import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ColombiaPageRoutingModule } from './colombia-routing.module';

import { ColombiaPage } from './colombia.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ColombiaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ColombiaPage]
})
export class ColombiaPageModule {}
