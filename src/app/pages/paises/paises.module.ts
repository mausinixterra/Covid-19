import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaisesPageRoutingModule } from './paises-routing.module';

import { PaisesPage } from './paises.page';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaisesPageRoutingModule,
    ComponentsModule,
    Ng2SearchPipeModule
  ],
  declarations: [PaisesPage]
})
export class PaisesPageModule {}
