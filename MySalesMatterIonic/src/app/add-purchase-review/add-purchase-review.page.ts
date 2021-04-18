import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm, NumberValueAccessor } from '@angular/forms';
import { Review } from '../models/review';
import { SessionService } from '../services/session.service';
import { ReviewService } from '../services/review.service';
import { SalesTransactionService } from '../services/sales-transaction.service';
import { ListingService } from '../services/listing.service';

@Component({
  selector: 'app-add-purchase-review',
  templateUrl: './add-purchase-review.page.html',
  styleUrls: ['./add-purchase-review.page.scss'],
})
export class AddPurchaseReviewPage implements OnInit {

  resultSuccess: boolean;
  resultError: boolean;
  listingId: number | null;
  review: Review;
  submitted: boolean;
  respondMessage: string;
  offerId: number;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private sessionService: SessionService,
    private reviewService: ReviewService,
    private salesTransactionService: SalesTransactionService,
    private listingService: ListingService) {

    this.review = new Review();
    this.resultSuccess = false;
    this.resultError = false;
  }

  ngOnInit() {
    
    this.offerId = parseInt(this.activatedRoute.snapshot.paramMap.get('offerId'));
    //console.log("HELLO" + this.offerId);
    this.listingService.getListingByOfferId(this.offerId).subscribe((response) => {
      this.listingId = response.listingId;
      console.log("HELLOListing" + this.listingId);
    });
  }

  back() {
    this.router.navigate(["/viewAllLoansAndPurchase"]);
  }

  clear() {
    this.submitted = false;
    this.review = new Review();
  }

  create(createReviewForm: NgForm) {
    console.log(this.listingId);
    console.log(this.sessionService.getCurrentUser().userId);
    this.submitted = true;

    if (createReviewForm.valid) {

        this.listingService.getListingByOfferId(this.offerId).subscribe((response) => {
              this.listingId = response.listingId;
              this.reviewService.createNewReview(this.review, this.sessionService.getCurrentUser().userId, this.listingId, null).subscribe(
                (response) => {
                  console.log('lisiting' + this.listingId);
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

          });
      
      // this.reviewService.createNewReview(this.review, this.sessionService.getCurrentUser().userId, this.listingId, this.salesId).subscribe(
      //     (response) => {
      //       console.log('lisiting' + this.listingId);
      //   console.log(this.salesId);
      //       this.review = response;
      //       this.resultSuccess = true;
      //       this.resultError = false;
      //       this.respondMessage = 'Review Added!';
      //       this.review = new Review();
      //       this.submitted = false;
      //       createReviewForm.reset();
      //     },
      //     (error) => {
      //       this.resultError = true;
      //       this.resultSuccess = false;
      //       this.respondMessage =
      //         'An error has occurred while adding the review: ' + error;
      //     }
      //   );
    }
  }


}

