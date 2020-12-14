import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutoevaluacionPageRoutingModule } from './autoevaluacion-routing.module';

import { AutoevaluacionPage } from './autoevaluacion.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutoevaluacionPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AutoevaluacionPage]
})
export class AutoevaluacionPageModule {}
