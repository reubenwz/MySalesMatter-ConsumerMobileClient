import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReviewsWrittenPageRoutingModule } from './reviews-written-routing.module';

import { ReviewsWrittenPage } from './reviews-written.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReviewsWrittenPageRoutingModule
  ],
  declarations: [ReviewsWrittenPage]
})
export class ReviewsWrittenPageModule {}
