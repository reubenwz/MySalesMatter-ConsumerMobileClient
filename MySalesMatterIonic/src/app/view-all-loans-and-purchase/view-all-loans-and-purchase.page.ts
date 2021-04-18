import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Review } from '../models/review';
import { SalesTransactionService } from '../services/sales-transaction.service';
import { SalesTransaction } from '../models/sales-transaction';
import { SessionService } from '../services/session.service';
import { ListingService } from '../services/listing.service';
import { Offer } from '../models/offer';
import { OfferService } from '../services/offer.service';
import { ReviewService } from '../services/review.service';

@Component({
  selector: 'app-view-all-loans-and-purchase',
  templateUrl: './view-all-loans-and-purchase.page.html',
  styleUrls: ['./view-all-loans-and-purchase.page.scss'],
})
export class ViewAllLoansAndPurchasePage implements OnInit {
  s: SalesTransaction[];

  retrieveSalesTransactionError: boolean;
  resultSuccess: boolean;
  resultError: boolean;
  message: string;
  listingId: number;
  salesId: number;
  reviews: Review[];
  sales: SalesTransaction;

  o: Offer[];
  retrievePurchasesError: boolean;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private saleTransactionService: SalesTransactionService,
    private offerService: OfferService,
    private listingService: ListingService,
    private sessionService: SessionService,
    private reviewService: ReviewService
  ) {
    this.resultSuccess = false;
    this.resultError = false;
  }

  ngOnInit() {
    this.saleTransactionService.getTransactionByUserId().subscribe(
      (response) => {
        this.s = response;
      },
      (error) => {
        this.retrieveSalesTransactionError = true;
        console.log('********** ViewAllLoansAndPurchasePage.ts: ' + error);
      }
    );
    this.offerService.getPurchaseOffersByUserId().subscribe(
      (response) => {
        this.o = response;
      },
      (error) => {
        this.retrievePurchasesError = true;
        console.log(
          '********** ViewAllLoansAndPurchasePage.ts offer error: ' + error
        );
      }
    );
  }

  // reviewDoesNotExist(offerId) {
  //   this.listingService.getListingByOfferId(offerId).subscribe((response) => {
  //     this.listingId = response.listingId;
  //   },
  //   error => {
  //     console.log('********** ViewAllLoansAndPurchasePage.ts: ' + error);
  //   }
  // );
  // console.log(this.listingId);
  //   this.reviewService.getReviewsByUserId(this.sessionService.getCurrentUser().userId).subscribe(
	// 		response => {
	// 			this.reviews = response;
  //       this.reviews.forEach(x => {
  //         if (x.listing.listingId == this.listingId) {
  //           return false;
  //         }
  //       });
  //       },
	// 		error => {
	// 			console.log('********** ViewAllLoansAndPurchasePage.ts: ' + error);
	// 		}
	// 	);
  //   return true;
  // }

  viewListingDetails(event, offerId) {
    console.log('HIII' + offerId);
    this.listingService.getListingByOfferId(offerId).subscribe((response) => {
      this.listingId = response.listingId;
      this.router.navigate(['/viewListingDetails/' + this.listingId]);
    });
  }


  addReview(event, salesId) {
    this.router.navigate(['/createReview/' + salesId]);
    console.log("ID IS " + salesId);
  }

  addPurchaseReview(event, offerId) {
    this.router.navigate(['/addPurchaseReview/' + offerId]);
    console.log("ID IS " + offerId);
  }

  back() {
    this.router.navigate(['/index/']);
  }
}
