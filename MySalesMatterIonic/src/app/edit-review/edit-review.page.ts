import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Review } from '../models/review';
import { ReviewService } from '../services/review.service';
import { User } from '../models/user';
import { SessionService } from '../services/session.service';
import { logging } from 'selenium-webdriver';

@Component({
  selector: 'app-edit-review',
  templateUrl: './edit-review.page.html',
  styleUrls: ['./edit-review.page.scss'],
})
export class EditReviewPage implements OnInit {

  submitted: boolean;
  reviewId: number;
  reviewToUpdate: Review;
  retrieveReviewError: boolean;

  resultSuccess: boolean;
  resultError: boolean;
  message: string;

  description: string | "";
  starRating: number; 
  pictPath: string;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private reviewService: ReviewService) {
    this.submitted = false;
    this.retrieveReviewError = false;

    this.resultSuccess = false;
    this.resultError = false;
  }

  ngOnInit() {
    this.reviewId = parseInt(this.activatedRoute.snapshot.paramMap.get('reviewId'));

    this.reviewService.getReviewByReviewId(this.reviewId).subscribe(
      response => {
        this.reviewToUpdate = response;
      },
      error => {
        this.retrieveReviewError = true;
        console.log('********** EditReviewPage.ts: ' + error);
      }
    );
  }

  update(updateReviewForm: NgForm) {

    this.submitted = true;

    if (updateReviewForm.valid) {
      this.reviewService.updateReview(this.reviewId, this.reviewToUpdate.starRating, this.reviewToUpdate.description, this.pictPath).subscribe(

        response => {
          this.resultSuccess = true;
          this.resultError = false;
          this.message = "Review updated successfully";
        },
        error => {
          this.resultError = true;
          this.resultSuccess = false;
          this.message = "An error has occurred while updating the review: " + error;

          console.log('********** EditReviewComponent.ts: ' + error);
        }
      );
    }
  }

  back() {
    this.router.navigate(["/view-review-details/" + this.reviewToUpdate.reviewId]);
  }
}
