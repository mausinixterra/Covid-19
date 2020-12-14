import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticiaComponent } from './noticia/noticia.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ExpandableComponent } from './expandable/expandable.component';


@NgModule({
  declarations: [
    NoticiaComponent,
    NoticiasComponent,
    MenuComponent,
    HeaderComponent,
    ExpandableComponent
  ],
  exports: [
    NoticiasComponent,
    MenuComponent,
    HeaderComponent,
    ExpandableComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    FontAwesomeModule
  ]
})
export class ComponentsModule { }
