import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LikedItem } from '../models/liked-item';
import { Listing } from '../models/listing';
import { LikedItemService } from '../services/liked-item.service';
import { ListingService } from '../services/listing.service';

@Component({
  selector: 'app-browse-all-listings',
  templateUrl: './browse-all-listings.page.html',
  styleUrls: ['./browse-all-listings.page.scss'],
})
export class BrowseAllListingsPage implements OnInit {
  filteredList: Listing[];
  likedItems: LikedItem[];
  likedItem: LikedItem;

  resultSuccess: boolean;
  resultError: boolean;
  message: string;

  constructor(
    private router: Router,
    private listingService: ListingService,
    private likedItemService: LikedItemService
  ) { }

  ngOnInit() {
    this.refreshListings();
  }

  createNewListing() {
    this.router.navigate(['/create-new-listing/']);
  }

  ionViewWillEnter() {
    this.refreshListings();
  }

  viewListingDetails(event, listing) {
    this.router.navigate(['/viewListingDetails/' + listing.listingId]);
  }

  filterList(event) {
    const searchTerm = event.srcElement.value;

    if (!searchTerm) {
      return;
    }
    this.listingService.searchListingsByName(searchTerm).subscribe(
      (response) => {
        this.filteredList = response;
      },
      (error) => {
        console.log('********** BrowseAllListingsPage.ts: ' + error);
      }
    );
  }

  listingIsLiked(listing) {
    for (var val of this.likedItems) {
      if (val.listing.listingId == listing.listingId) {
        return true;
      } else {
        return false;
      }
    }
    return false;
  }

  unlike(event, listing) {
    this.likedItemService.unlikeItem(listing.listingId).subscribe(
      (response) => {
        this.resultSuccess = true;
        this.resultError = false;
        this.message = 'Listing unliked successfully!';
        this.refreshListings();
      },
      (error) => {
        console.log('********** BrowseAllListingsPage.ts: ' + error);
      }
    );
  }

  like(event, listing) {
    console.log("*** " + listing.listingId);
    this.likedItemService.createNewLikedItem(listing.listingId).subscribe(
      (response) => {
        this.likedItem = response;
        this.resultSuccess = true;
        this.resultError = false;
        this.message =
          'Listing liked successfully!';
        this.refreshListings();
      },
      (error) => {
        console.log('********** BrowseAllListingsPage.ts: ' + error);
      }
    );
  }

  refreshListings() {
    this.listingService.getListings().subscribe(
      (response) => {
        this.filteredList = response;
      },
      (error) => {
        console.log('********** BrowseAllListingsPage.ts: ' + error);
      }
    );
    this.likedItemService.getLikedItems().subscribe(
      (response) => {
        this.likedItems = response;
      },
      (error) => {
        console.log('********** BrowseAllListingsPage.ts: ' + error);
      }
    );
  }
}
