import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewAllReviewsPageRoutingModule } from './view-all-reviews-routing.module';

import { ViewAllReviewsPage } from './view-all-reviews.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewAllReviewsPageRoutingModule
  ],
  declarations: [ViewAllReviewsPage]
})
export class ViewAllReviewsPageModule {}
