import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuidadosPageRoutingModule } from './cuidados-routing.module';

import { CuidadosPage } from './cuidados.page';
import { ComponentsModule } from '../../components/components.module';
//import { ExpandableComponent } from '../../components/expandable/expandable.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuidadosPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [CuidadosPage]
})
export class CuidadosPageModule {}
