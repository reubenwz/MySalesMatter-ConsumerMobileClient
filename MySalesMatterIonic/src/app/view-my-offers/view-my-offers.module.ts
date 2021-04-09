import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewMyOffersPageRoutingModule } from './view-my-offers-routing.module';

import { ViewMyOffersPage } from './view-my-offers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewMyOffersPageRoutingModule
  ],
  declarations: [ViewMyOffersPage]
})
export class ViewMyOffersPageModule {}
