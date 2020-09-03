import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuLibrairesPage } from './menu-libraires.page';

const routes: Routes = [
  {
    path: '',
    component: MenuLibrairesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuLibrairesPageRoutingModule {}
