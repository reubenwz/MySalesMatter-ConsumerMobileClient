import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Listing } from '../models/listing';
import { Offer } from '../models/offer';
import { ListingService } from '../services/listing.service';
import { OfferService } from '../services/offer.service';
import { SalesTransactionService } from '../services/sales-transaction.service';
import { SessionService } from '../services/session.service';
import { SalesTransaction } from '../models/sales-transaction';

@Component({
  selector: 'app-view-my-offers',
  templateUrl: './view-my-offers.page.html',
  styleUrls: ['./view-my-offers.page.scss'],
})
export class ViewMyOffersPage implements OnInit {

  pendingOffers: Offer[];
  acceptedOffers: Offer[];
  allOffers: Offer[];
  listing: Listing;

  message: string;
  error: boolean;
  errorMessage: string;
  resultSuccess: boolean;

  constructor(private router: Router, private offerService: OfferService, private listingService: ListingService, private sessionService: SessionService, private salesTransactionService: SalesTransactionService, public alertController: AlertController) { }

  ngOnInit() {
    this.refreshOffers();
  }



  ionViewWillEnter() {
    this.refreshOffers();
  }


  viewListingDetails(event, offer) {
    this.listingService.getListingByOfferId(offer.offerId).subscribe(
      response => {
        this.listing = response;
        this.router.navigate(["/viewListingDetails/" + this.listing.listingId]);
      },
      error => {
        console.log('********** ViewMyListingsPage.ts: ' + error);
      }
    );
  }

  arrangeMeetup(event, offer) {
    this.router.navigate([
      '/replyChat/' + this.sessionService.getCurrentUser().userId + '/' + offer.offerId,
    ]);
  }

  async makePayment(event, offer) {
    const alert = await this.alertController.create({
      header: 'Confirm Payment',
      message: 'Confirm payment <strong>' + offer.offerId + '</strong>?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            this.message = "Payment failed!";
            this.refreshOffers();
          }
        }, {
          text: 'Confirm Payment',
          handler: () => {
            this.salesTransactionService.createNewTransaction(offer.offerId, this.sessionService.getCurrentUser().userId, 'paid', new Date(), offer.totalPrice).subscribe(
              response => {
                this.resultSuccess = true;
                this.message = "Payment made!";
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

  async deleteOffer(event, offer) {
    const alert = await this.alertController.create({
      header: 'Confirm Delete Offer',
      message:
        'Confirm delete offer <strong>' + offer.offerId + '</strong>?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => { },
        },
        {
          text: 'Okay',
          handler: () => {
            this.offerService.deleteOffer(offer.offerId).subscribe(
              (response) => {
                this.resultSuccess = true;
                this.allOffers.splice(
                  this.allOffers.indexOf(offer, 0),
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

  refreshOffers() {
    this.offerService.getOffersByUserId().subscribe(
      response => {
        this.allOffers = response;
      },
      error => {
        console.log('********** ViewMyListingsPage.ts: ' + error);
      }
    );
    /*for (var val of this.allOffers) {
      if (val.accepted) {
        this.acceptedOffers.push(val);
      } else {
        this.pendingOffers.push(val);
      }
    }*/
  }

}
