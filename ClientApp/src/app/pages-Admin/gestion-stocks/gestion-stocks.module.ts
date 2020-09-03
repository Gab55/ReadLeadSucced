import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionStocksPageRoutingModule } from './gestion-stocks-routing.module';

import { GestionStocksPage } from './gestion-stocks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionStocksPageRoutingModule
  ],
  declarations: [GestionStocksPage]
})
export class GestionStocksPageModule {}
