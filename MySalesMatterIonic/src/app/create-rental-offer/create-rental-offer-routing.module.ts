import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateRentalOfferPage } from './create-rental-offer.page';

const routes: Routes = [
  {
    path: '',
    component: CreateRentalOfferPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateRentalOfferPageRoutingModule {}
