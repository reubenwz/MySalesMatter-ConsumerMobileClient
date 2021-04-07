import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReviewsReceivedPage } from './reviews-received.page';

const routes: Routes = [
  {
    path: '',
    component: ReviewsReceivedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReviewsReceivedPageRoutingModule {}
