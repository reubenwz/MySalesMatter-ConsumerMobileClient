import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReviewsReceivedPageRoutingModule } from './reviews-received-routing.module';

import { ReviewsReceivedPage } from './reviews-received.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReviewsReceivedPageRoutingModule
  ],
  declarations: [ReviewsReceivedPage]
})
export class ReviewsReceivedPageModule {}
