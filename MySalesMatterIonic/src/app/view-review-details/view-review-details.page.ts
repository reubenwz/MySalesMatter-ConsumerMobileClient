import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Review } from '../models/review';
import { ReviewService } from '../services/review.service';

@Component({
  selector: 'app-view-review-details',
  templateUrl: './view-review-details.page.html',
  styleUrls: ['./view-review-details.page.scss'],
})
export class ViewReviewDetailsPage implements OnInit {

  reviewId: number;
  reviewToView: Review;
  retrieveReviewError: boolean;
  error: boolean;
  errorMessage: string;
  resultSuccess: boolean;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private reviewService: ReviewService,
    public alertController: AlertController) {
    this.retrieveReviewError = false;
    this.error = false;
    this.resultSuccess = false;
  }

  ngOnInit() {
    this.reviewId = parseInt(this.activatedRoute.snapshot.paramMap.get('reviewId'));
    this.refreshReview();
  }

  ionViewWillEnter() {
    this.refreshReview();
  }



  refreshReview() {
    this.reviewService.getReviewByReviewId(this.reviewId).subscribe(
      response => {
        this.reviewToView = response;
      },
      error => {
        this.retrieveReviewError = true;
        console.log('********** ViewReviewDetailsPage.ts: ' + error);
      }
    );
  }

  // back() {
  //   this.router.navigate(["browseAllListings"]);
  // }

}




 



