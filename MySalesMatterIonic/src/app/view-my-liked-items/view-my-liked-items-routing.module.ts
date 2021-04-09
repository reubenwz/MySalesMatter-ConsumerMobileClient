import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewMyLikedItemsPage } from './view-my-liked-items.page';

const routes: Routes = [
  {
    path: '',
    component: ViewMyLikedItemsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewMyLikedItemsPageRoutingModule {}
