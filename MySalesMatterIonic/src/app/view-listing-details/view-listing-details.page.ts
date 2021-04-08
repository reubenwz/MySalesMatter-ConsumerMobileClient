import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Listing } from '../models/listing';
import { ListingService } from '../services/listing.service';

@Component({
  selector: 'app-view-listing-details',
  templateUrl: './view-listing-details.page.html',
  styleUrls: ['./view-listing-details.page.scss'],
})
export class ViewListingDetailsPage implements OnInit {

  listingId: number;
  listingToView: Listing;
  rentalAvailability: boolean;
  forSaleAvailability: boolean;
  retrieveListingError: boolean;
  error: boolean;
  errorMessage: string;
  resultSuccess: boolean;



  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private listingService: ListingService,
    public alertController: AlertController) {
    this.retrieveListingError = false;
    this.error = false;
    this.resultSuccess = false;
  }



  ngOnInit() {
    this.listingId = parseInt(this.activatedRoute.snapshot.paramMap.get('listingId'));

    this.refreshListing();
  }



  ionViewWillEnter() {
    this.refreshListing();
  }



  refreshListing() {
    this.listingService.getListingByListingId(this.listingId).subscribe(
      response => {
        this.listingToView = response;
      },
      error => {
        this.retrieveListingError = true;
        console.log('********** ViewListingDetailsPage.ts: ' + error);
      }
    );
    this.rentalAvailability = this.listingToView.rentalAvailability;
    this.forSaleAvailability = this.listingToView.forSaleAvailability;
  }

  createRentalOffer() {
    this.router.navigate(["createRentalOffer" + this.listingId]);
  }

  createBuyOffer() {
    this.router.navigate(["createBuyOffer" + this.listingId]);
  }

  back() {
    this.router.navigate(["browseAllListings"]);
  }

}
