import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Review } from '../models/review';
import { ReviewService } from '../services/review.service';
import { SessionService } from '../services/session.service';
import { User } from '../models/user';
import { logging } from 'selenium-webdriver';
import { Listing } from '../models/listing';

@Component({
  selector: 'app-reviews-received',
  templateUrl: './reviews-received.page.html',
  styleUrls: ['./reviews-received.page.scss'],
})
export class ReviewsReceivedPage implements OnInit {

  reviews: Review[];
  userId: number;
  error: boolean;
  errorMessage: string;
  resultSuccess: boolean;
  retriveReviewsError: boolean;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private reviewService: ReviewService,
    private sessionService: SessionService) { 
    this.error = false;
    this.retriveReviewsError = false;
    }

  ngOnInit() {
    this.userId = this.sessionService.getCurrentUser().userId;
    this.refreshReviews();
  }

  ionViewWillEnter() {
    this.refreshReviews();
	}

  viewReviewDetails(event, review) {
    this.router.navigate(["/view-review-details/" + review.reviewId]);
  }

  refreshReviews(){
    this.reviewService.getReviewsReceivedByUserId(this.userId).subscribe(
			response => {
				this.reviews = response;
			},
			error => {
				console.log('********** ViewAllReviewsPage.ts: ' + error);
			}
		);
  }

  back() {
    this.router.navigate(['/index/']);
  }
}
