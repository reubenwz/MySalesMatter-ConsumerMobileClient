import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewAllLoansAndPurchasePage } from './view-all-loans-and-purchase.page';

const routes: Routes = [
  {
    path: '',
    component: ViewAllLoansAndPurchasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewAllLoansAndPurchasePageRoutingModule {}
