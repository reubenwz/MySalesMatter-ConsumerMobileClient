import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateBuyOfferPageRoutingModule } from './create-buy-offer-routing.module';

import { CreateBuyOfferPage } from './create-buy-offer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateBuyOfferPageRoutingModule
  ],
  declarations: [CreateBuyOfferPage]
})
export class CreateBuyOfferPageModule {}
