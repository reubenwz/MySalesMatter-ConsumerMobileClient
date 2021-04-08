import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateBuyOfferPage } from './create-buy-offer.page';

const routes: Routes = [
  {
    path: '',
    component: CreateBuyOfferPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateBuyOfferPageRoutingModule {}
