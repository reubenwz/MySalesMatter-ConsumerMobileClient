import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Review } from '../models/review';
import { SalesTransactionService } from '../services/sales-transaction.service';
import { SalesTransaction } from '../models/sales-transaction';
import { SessionService } from '../services/session.service';
import { ListingService } from '../services/listing.service';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

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

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private saleTransactionService: SalesTransactionService,
    private listingService: ListingService,
    private sessionService: SessionService) {

    this.resultSuccess = false;
    this.resultError = false;
  }

  ngOnInit() {
    this.saleTransactionService.getTransactionByUserId().subscribe(
      response => {
        this.s = response;
      },
      error => {
        this.retrieveSalesTransactionError = true;
        console.log('********** ViewAllLoansAndPurchasePage.ts: ' + error);
      }
    );
  }

  viewListingDetails(event, offerId) {
    console.log("HIII" + offerId);
    this.listingService.getListingByOfferId(offerId).subscribe (
      (response) => {
        this.listingId = response.listingId;
        this.router.navigate(['/viewListingDetails/' + this.listingId]);
      }
    )
  }

  addReview(event, offerId) {
    this.listingService.getListingByOfferId(offerId).subscribe (
      (response) => {
        this.listingId = response.listingId;
        this.router.navigate(['/createReview/' + this.listingId]);
      }
    )
  }

  back() {
    this.router.navigate(["/index"]);
  }

}
