import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Review } from '../models/review';
import { SalesTransactionService } from '../services/sales-transaction.service';
import { SalesTransaction } from '../models/sales-transaction';
import { SessionService } from '../services/session.service';

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

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private saleTransactionService: SalesTransactionService,
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

  viewListingDetails(event, offer) {
    this.router.navigate(['/viewListingDetails/' + offer.listing.listingId]);
  }

  back() {
    this.router.navigate(["/index"]);
  }

}
