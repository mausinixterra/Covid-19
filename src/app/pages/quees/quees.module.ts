import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QueesPageRoutingModule } from './quees-routing.module';

import { QueesPage } from './quees.page';
import { ComponentsModule } from '../../components/components.module';
import { ModalInfoPageModule } from '../modal-info/modal-info.module';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@NgModule({
  entryComponents: [
    ModalInfoPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    QueesPageRoutingModule,
    ComponentsModule,
    ModalInfoPageModule
  ],
  declarations: [QueesPage]
})
export class QueesPageModule {}
