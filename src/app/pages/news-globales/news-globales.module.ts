import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsGlobalesPageRoutingModule } from './news-globales-routing.module';

import { NewsGlobalesPage } from './news-globales.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    NewsGlobalesPageRoutingModule
  ],
  declarations: [NewsGlobalesPage]
})
export class NewsGlobalesPageModule {}
