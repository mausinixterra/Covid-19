import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'news',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../news/news.module').then( m => m.NoticiasPageModule)
          }
        ]
      },
      {
        path: 'news-globales',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../news-globales/news-globales.module').then( m => m.NewsGlobalesPageModule)
          }
        ]
      },
      {
        path: 'favoritos',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../favoritos/favoritos.module').then( m => m.FavoritosPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/news',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/news',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}

