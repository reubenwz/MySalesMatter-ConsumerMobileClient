import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Listing } from '../models/listing';
import { ListingService } from '../services/listing.service';

@Component({
  selector: 'app-view-my-listings',
  templateUrl: './view-my-listings.page.html',
  styleUrls: ['./view-my-listings.page.scss'],
})
export class ViewMyListingsPage implements OnInit {
  filteredList: Listing[];
  error: boolean;
  errorMessage: string;
  resultSuccess: boolean;

  constructor(
    private router: Router,
    private listingService: ListingService,
    public alertController: AlertController
  ) {}

  ngOnInit() {
    this.refreshListings();
  }

  ionViewWillEnter() {
    this.refreshListings();
  }

  viewListingDetails(event, listing) {
    this.router.navigate(['/viewListingDetails/' + listing.listingId]);
  }

  updateListing(event, listing) {
    this.router.navigate(['/updateListing/' + listing.listingId]);
  }

  viewOffers(event, listing) {
    this.router.navigate(['/viewListingOffers/' + listing.listingId]);
  }

  async deleteListing(event, listing) {
    const alert = await this.alertController.create({
      header: 'Confirm Delete Listing',
      message:
        'Confirm delete listing <strong>' + listing.listingId + '</strong>?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {},
        },
        {
          text: 'Okay',
          handler: () => {
            this.listingService.deleteListing(listing.listingId).subscribe(
              (response) => {
                this.resultSuccess = true;
                this.filteredList.splice(
                  this.filteredList.indexOf(listing, 0),
                  1
                );
              },
              (error) => {
                this.error = true;
                this.errorMessage = error;
              }
            );
          },
        },
      ],
    });

    await alert.present();
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
        console.log('********** ViewMyListingsPage.ts: ' + error);
      }
    );
  }

  refreshListings() {
    this.listingService.getListingsByUser().subscribe(
      (response) => {
        this.filteredList = response;
      },
      (error) => {
        console.log('********** ViewMyListingsPage.ts: ' + error);
      }
    );
  }

  back() {
    this.router.navigate(['/index/']);
  }
}
