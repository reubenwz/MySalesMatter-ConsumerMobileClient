import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Offer } from '../models/offer';
import { OfferService } from '../services/offer.service';

@Component({
  selector: 'app-view-listing-offers',
  templateUrl: './view-listing-offers.page.html',
  styleUrls: ['./view-listing-offers.page.scss'],
})
export class ViewListingOffersPage implements OnInit {

  offers: Offer[];
  listingId: number;
  error: boolean;
  errorMessage: string;
  resultSuccess: boolean;
  message: string;

  constructor(private router: Router, private offerService: OfferService, public alertController: AlertController, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.listingId = parseInt(this.activatedRoute.snapshot.paramMap.get('listingId'));
    this.refreshOffers();
  }



  ionViewWillEnter() {
    this.refreshOffers();
  }


  refreshOffers() {
    this.offerService.getOffersByListingId(this.listingId).subscribe(
      response => {
        this.offers = response;
      },
      error => {
        console.log('********** ViewListingOffersPage.ts: ' + error);
      }
    );
  }

  async acceptOffer(event, offer) {
    const alert = await this.alertController.create({
      header: 'Confirm Accept Offer',
      message: 'Confirm accept offer <strong>' + offer.offerId + '</strong>?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            this.message = "Offer rejected successfully";
            this.refreshOffers();
          }
        }, {
          text: 'Okay',
          handler: () => {
            this.offerService.acceptOffer(offer.offerId).subscribe(
              response => {
                this.resultSuccess = true;
                this.refreshOffers;
                this.message = "Offer accepted successfully";
                this.refreshOffers();
              },
              error => {
                this.error = true;
                this.errorMessage = error;
              }
            );
          }
        }
      ]
    });

    await alert.present();
  }

  back() {
    this.router.navigate(["viewMyListings"]);
  }
}
