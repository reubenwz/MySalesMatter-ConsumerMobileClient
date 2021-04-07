import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReviewsWrittenPage } from './reviews-written.page';

const routes: Routes = [
  {
    path: '',
    component: ReviewsWrittenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReviewsWrittenPageRoutingModule {}
