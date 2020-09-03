import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionCataloguePageRoutingModule } from './gestion-catalogue-routing.module';

import { GestionCataloguePage } from './gestion-catalogue.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionCataloguePageRoutingModule
  ],
  declarations: [GestionCataloguePage]
})
export class GestionCataloguePageModule {}
