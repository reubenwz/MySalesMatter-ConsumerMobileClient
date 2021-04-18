import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPurchaseReviewPageRoutingModule } from './add-purchase-review-routing.module';

import { AddPurchaseReviewPage } from './add-purchase-review.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddPurchaseReviewPageRoutingModule
  ],
  declarations: [AddPurchaseReviewPage]
})
export class AddPurchaseReviewPageModule {}
