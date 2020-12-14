import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsGlobalesPage } from './news-globales.page';

const routes: Routes = [
  {
    path: '',
    component: NewsGlobalesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsGlobalesPageRoutingModule {}
