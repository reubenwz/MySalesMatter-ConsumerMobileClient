import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Offer } from '../models/offer';
import { OfferService } from '../services/offer.service';

@Component({
  selector: 'app-view-my-offers',
  templateUrl: './view-my-offers.page.html',
  styleUrls: ['./view-my-offers.page.scss'],
})
export class ViewMyOffersPage implements OnInit {

  pendingOffers: Offer[];
  acceptedOffers: Offer[];
  allOffers: Offer[];

  constructor(private router: Router, private offerService: OfferService) { }

  ngOnInit() {
    this.refreshOffers();
  }



  ionViewWillEnter() {
    this.refreshOffers();
  }



  viewListingDetails(event, offer) {
    this.router.navigate(["/viewListingDetails/" + offer.listing.listingId]);
  }

  makePayment(event, offer) {

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
    for (var val of this.allOffers) {
      if (val.accepted) {
        this.acceptedOffers.push(val);
      } else {
        this.pendingOffers.push(val);
      }
    }
  }

}
