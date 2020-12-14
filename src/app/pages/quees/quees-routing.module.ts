import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QueesPage } from './quees.page';

const routes: Routes = [
  {
    path: '',
    component: QueesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QueesPageRoutingModule {}
