import { Component, OnInit } from '@angular/core';

import { Review } from '../models/review';
import { ReviewService } from '../services/review.service';

@Component({
  selector: 'app-reviews-received',
  templateUrl: './reviews-received.page.html',
  styleUrls: ['./reviews-received.page.scss'],
})
export class ReviewsReceivedPage implements OnInit {

  reviews: Review[] | null;

  constructor(private reviewService: ReviewService) { }

  ngOnInit() {
    this.updateModel();
  }

  ionViewWillEnter() {
    this.updateModel();
	}

  updateModel(){
    // this.reviewService.getReviewByUserId().subscribe(
		// 	response => {
		// 		this.reviews = response;
		// 	},
		// 	error => {
		// 		console.log('********** ViewAllReviewsPage.ts: ' + error);
		// 	}
		// );
  }
}
