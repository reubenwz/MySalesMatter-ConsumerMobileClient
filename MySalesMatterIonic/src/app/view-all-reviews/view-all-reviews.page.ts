import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Review } from '../models/review';
import { ListingService } from '../services/listing.service';
import { Listing } from '../models/listing';

@Component({
  selector: 'app-view-all-reviews',
  templateUrl: './view-all-reviews.page.html',
  styleUrls: ['./view-all-reviews.page.scss'],
})
export class ViewAllReviewsPage implements OnInit {
  listing: Listing;
  listingId: number;
  reviews: Review[];

  retrieveListingError: boolean;
  resultSuccess: boolean;
  resultError: boolean;
  message: string;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private listingService: ListingService) {

    this.resultSuccess = false;
    this.resultError = false;
  }

  ngOnInit() {
    this.listingId = parseInt(this.activatedRoute.snapshot.paramMap.get('listingId'));
    this.listingService.getListingByListingId(this.listingId).subscribe(
      response => {
        this.listing = response;
        this.reviews = response.reviews;
      },
      error => {
        this.retrieveListingError = true;
        console.log('********** ViewAllReviewsPage.ts: ' + error);
      }
    );
  }

}




