import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewListingOffersPageRoutingModule } from './view-listing-offers-routing.module';

import { ViewListingOffersPage } from './view-listing-offers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewListingOffersPageRoutingModule
  ],
  declarations: [ViewListingOffersPage]
})
export class ViewListingOffersPageModule {}
