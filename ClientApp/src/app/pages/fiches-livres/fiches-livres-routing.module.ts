import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FichesLivresPage } from './fiches-livres.page';

const routes: Routes = [
  {
    path: '',
    component: FichesLivresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FichesLivresPageRoutingModule {}
