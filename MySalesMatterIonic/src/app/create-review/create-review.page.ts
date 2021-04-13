import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Review } from '../models/review';
import { SessionService } from '../services/session.service';
import { ReviewService } from '../services/review.service';

@Component({
  selector: 'app-create-review',
  templateUrl: './create-review.page.html',
  styleUrls: ['./create-review.page.scss'],
})
export class CreateReviewPage implements OnInit {

  resultSuccess: boolean;
  resultError: boolean;
  listingId: number | null;
  review: Review;
  submitted: boolean;
  respondMessage: string;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private sessionService: SessionService,
    private reviewService: ReviewService) {

    this.review = new Review();
    this.resultSuccess = false;
    this.resultError = false;
  }

  ngOnInit() {
    this.listingId = parseInt(this.activatedRoute.snapshot.paramMap.get('listingId'));
  }

  back() {
    this.router.navigate(["/viewAllLoansAndPurchase"]);
  }

  clear() {
    this.submitted = false;
    this.review = new Review();
  }

  create(createReviewForm: NgForm) {
    this.listingId = parseInt(this.activatedRoute.snapshot.paramMap.get('listingId'));
    console.log(this.listingId);
    console.log(this.sessionService.getCurrentUser().userId);
    this.submitted = true;
    if (createReviewForm.valid) {
      this.reviewService.createNewReview(this.review, this.sessionService.getCurrentUser().userId, this.listingId).subscribe(
          (response) => {
            this.review = response;
            this.resultSuccess = true;
            this.resultError = false;
            this.respondMessage = 'Review Added!';
            this.review = new Review();
            this.submitted = false;
            createReviewForm.reset();
          },
          (error) => {
            this.resultError = true;
            this.resultSuccess = false;
            this.respondMessage =
              'An error has occurred while adding the review: ' + error;
          }
        );
    }
  }

}
