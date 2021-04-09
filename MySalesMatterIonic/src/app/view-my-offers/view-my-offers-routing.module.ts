import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewMyOffersPage } from './view-my-offers.page';

const routes: Routes = [
  {
    path: '',
    component: ViewMyOffersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewMyOffersPageRoutingModule {}
