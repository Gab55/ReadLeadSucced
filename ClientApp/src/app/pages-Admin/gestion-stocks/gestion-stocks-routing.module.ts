import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionStocksPage } from './gestion-stocks.page';

const routes: Routes = [
  {
    path: '',
    component: GestionStocksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionStocksPageRoutingModule {}
