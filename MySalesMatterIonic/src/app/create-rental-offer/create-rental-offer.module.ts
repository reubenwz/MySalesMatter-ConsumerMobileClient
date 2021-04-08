import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateRentalOfferPageRoutingModule } from './create-rental-offer-routing.module';

import { CreateRentalOfferPage } from './create-rental-offer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateRentalOfferPageRoutingModule
  ],
  declarations: [CreateRentalOfferPage]
})
export class CreateRentalOfferPageModule {}
