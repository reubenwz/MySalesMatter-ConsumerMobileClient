import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OfferType } from '../enums/offer-type.enum';
import { BuyOffer } from '../models/buy-offer';
import { Offer } from '../models/offer';
import { OfferService } from '../services/offer.service';
import { ListingService } from '../services/listing.service';
import { Listing } from '../models/listing';

@Component({
  selector: 'app-create-buy-offer',
  templateUrl: './create-buy-offer.page.html',
  styleUrls: ['./create-buy-offer.page.scss'],
})
export class CreateBuyOfferPage implements OnInit {

  submitted: boolean;
  newBuyOffer: Offer;
  userId: number;
  listingId: number;
  listing: Listing;
  totalPrice: number;

  retrieveListingError: boolean;
  resultSuccess: boolean;
  resultError: boolean;
  message: string;



  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private offerService: OfferService,
    private listingService: ListingService) {
    this.submitted = false;
    this.newBuyOffer = new BuyOffer();
    this.newBuyOffer.offerDate = new Date();
    this.newBuyOffer.offerType = OfferType.BUY;
    this.newBuyOffer.totalPrice = this.totalPrice;

    this.resultSuccess = false;
    this.resultError = false;
  }



  ngOnInit() {
    this.listingId = parseInt(this.activatedRoute.snapshot.paramMap.get('listingId'));
    this.listingService.getListingByListingId(this.listingId).subscribe(
      response => {
        this.listing = response;
        this.totalPrice = this.listing.salePrice;
      },
      error => {
        this.retrieveListingError = true;
        console.log('********** CreateBuyOfferPage.ts: ' + error);
      }
    );
  }



  clear() {
    this.submitted = false;
    this.newBuyOffer = new BuyOffer();
  }



  create(createBuyOfferForm: NgForm) {

    this.submitted = true;

    if (createBuyOfferForm.valid) {
      this.offerService.createNewOffer(this.newBuyOffer, this.listingId, this.userId).subscribe(
        response => {
          let newOfferCreated: Offer = response;
          this.resultSuccess = true;
          this.resultError = false;
          this.message = "New offer " + newOfferCreated.offerId + " created successfully";

          this.newBuyOffer = new BuyOffer();
          this.submitted = false;
          createBuyOfferForm.reset();
        },
        error => {
          this.resultError = true;
          this.resultSuccess = false;
          this.message = "An error has occurred while creating the new buy offer: " + error;

          console.log('********** CreateBuyOfferPage.ts: ' + error);
        }
      );
    }
  }

}
