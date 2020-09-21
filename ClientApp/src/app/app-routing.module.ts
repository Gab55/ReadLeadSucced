import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'catalogue',
    loadChildren: () => import('./pages/catalogue/catalogue.module').then(m => m.CataloguePageModule)
  },
  {
    path: 'fiches-livres',
    loadChildren: () => import('./pages/fiches-livres/fiches-livres.module').then( m => m.FichesLivresPageModule)
  },
  {
    path: 'menu-libraires',
    loadChildren: () => import('./pages-Admin/menu-libraires/menu-libraires.module').then( m => m.MenuLibrairesPageModule)
  },
  {
    path: 'gestion-catalogue',
    loadChildren: () => import('./pages-Admin/gestion-catalogue/gestion-catalogue.module').then( m => m.GestionCataloguePageModule)
  },
  {
    path: 'gestion-stocks',
    loadChildren: () => import('./pages-Admin/gestion-stocks/gestion-stocks.module').then( m => m.GestionStocksPageModule)
  },
  {
    path: 'connexion',
    loadChildren: () => import('./pages/connexion/connexion.module').then( m => m.ConnexionPageModule)
  },
  {
    path: 'ajout-client',
    loadChildren: () => import('./pages/ajout-client/ajout-client.module').then( m => m.AjoutClientPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
