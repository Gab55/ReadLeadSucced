import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuLibrairesPageRoutingModule } from './menu-libraires-routing.module';

import { MenuLibrairesPage } from './menu-libraires.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuLibrairesPageRoutingModule
  ],
  declarations: [MenuLibrairesPage]
})
export class MenuLibrairesPageModule {}
