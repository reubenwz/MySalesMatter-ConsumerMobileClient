import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewListingOffersPage } from './view-listing-offers.page';

const routes: Routes = [
  {
    path: '',
    component: ViewListingOffersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewListingOffersPageRoutingModule {}
