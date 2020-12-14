import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'slides', pathMatch: 'full' },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'mundo',
    loadChildren: () => import('./pages/mundo/mundo.module').then( m => m.MundoPageModule)
  },
  {
    path: 'paises',
    loadChildren: () => import('./pages/paises/paises.module').then( m => m.PaisesPageModule)
  },
  {
    path: 'colombia',
    loadChildren: () => import('./pages/colombia/colombia.module').then( m => m.ColombiaPageModule)
  },
  {
    path: 'news',
    loadChildren: () => import('./pages/news/news.module').then( m => m.NoticiasPageModule)
  },
  {
    path: 'news-globales',
    loadChildren: () => import('./pages/news-globales/news-globales.module').then( m => m.NewsGlobalesPageModule)
  },
  {
    path: 'favoritos',
    loadChildren: () => import('./pages/favoritos/favoritos.module').then( m => m.FavoritosPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'slides',
    loadChildren: () => import('./pages/slides/slides.module').then( m => m.SlidesPageModule)
  },
  {
    path: 'quees',
    loadChildren: () => import('./pages/quees/quees.module').then( m => m.QueesPageModule)
  },
  {
    path: 'modal-info',
    loadChildren: () => import('./pages/modal-info/modal-info.module').then( m => m.ModalInfoPageModule)
  },
  {
    path: 'cuidados',
    loadChildren: () => import('./pages/cuidados/cuidados.module').then( m => m.CuidadosPageModule)
  },
  {
    path: 'contacto',
    loadChildren: () => import('./pages/contacto/contacto.module').then( m => m.ContactoPageModule)
  },
  {
    path: 'acercade',
    loadChildren: () => import('./pages/acercade/acercade.module').then( m => m.AcercadePageModule)
  },
  {
    path: 'verificar',
    loadChildren: () => import('./pages/verificar/verificar.module').then( m => m.VerificarPageModule)
  },
  {
    path: 'autoevaluacion',
    loadChildren: () => import('./pages/autoevaluacion/autoevaluacion.module').then( m => m.AutoevaluacionPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
