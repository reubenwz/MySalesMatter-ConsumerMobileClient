import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Listing } from '../models/listing';
import { ListingService } from '../services/listing.service';

@Component({
  selector: 'app-browse-all-listings',
  templateUrl: './browse-all-listings.page.html',
  styleUrls: ['./browse-all-listings.page.scss'],
})
export class BrowseAllListingsPage implements OnInit {

  listings: Listing[];

  constructor(private router: Router, private listingService: ListingService) { }

  ngOnInit() {
    this.refreshListings();
  }



  ionViewWillEnter() {
    this.refreshListings();
  }



  viewListingDetails(event, listing) {
    this.router.navigate(["/viewListingDetails/" + listing.listingId]);
  }

  refreshListings() {
    this.listingService.getListings().subscribe(
      response => {
        this.listings = response;
      },
      error => {
        console.log('********** BrowseAllListingsPage.ts: ' + error);
      }
    );
  }

}
