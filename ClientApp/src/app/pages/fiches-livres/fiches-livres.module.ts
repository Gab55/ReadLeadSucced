import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FichesLivresPageRoutingModule } from './fiches-livres-routing.module';

import { FichesLivresPage } from './fiches-livres.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FichesLivresPageRoutingModule
  ],
  declarations: [FichesLivresPage]
})
export class FichesLivresPageModule {}
