import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPurchaseReviewPage } from './add-purchase-review.page';

const routes: Routes = [
  {
    path: '',
    component: AddPurchaseReviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddPurchaseReviewPageRoutingModule {}
