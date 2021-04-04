import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrowseAllListingsPage } from './browse-all-listings.page';

const routes: Routes = [
  {
    path: '',
    component: BrowseAllListingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrowseAllListingsPageRoutingModule {}
