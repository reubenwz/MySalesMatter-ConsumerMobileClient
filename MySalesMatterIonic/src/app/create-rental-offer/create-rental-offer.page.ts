import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OfferType } from '../enums/offer-type.enum';
import { Listing } from '../models/listing';
import { Offer } from '../models/offer';
import { ListingService } from '../services/listing.service';
import { OfferService } from '../services/offer.service';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-create-rental-offer',
  templateUrl: './create-rental-offer.page.html',
  styleUrls: ['./create-rental-offer.page.scss'],
})
export class CreateRentalOfferPage implements OnInit {

  submitted: boolean;
  userId: number;
  listingId: number;
  start: Date;
  end: Date;
  totalPrice: number;
  newTotalPrice: number;
  listing: Listing;
  days: number;
  diff: number;

  retrieveListingError: boolean;
  resultSuccess: boolean;
  resultError: boolean;
  message: string;



  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private offerService: OfferService,
    private sessionService: SessionService,
    private listingService: ListingService) {
    this.submitted = false;
    this.retrieveListingError = false;
    this.resultSuccess = false;
    this.resultError = false;
    this.userId = this.sessionService.getCurrentUser().userId;
  }



  ngOnInit() {
    this.listingId = parseInt(this.activatedRoute.snapshot.paramMap.get('listingId'));
    this.listingService.getListingByListingId(this.listingId).subscribe(
      response => {
        this.listing = response;
        this.totalPrice = this.listing.rentalPrice;
      },
      error => {
        this.retrieveListingError = true;
        console.log('********** CreateBuyOfferPage.ts: ' + error);
      }
    );
  }



  clear() {
    this.submitted = false;
  }

  calculate() {
    this.diff = new Date(this.end).getTime() - new Date(this.start).getTime();
    this.days = this.diff / (1000 * 60 * 60 * 24);
    this.newTotalPrice = this.days * this.totalPrice;
  }

  /*calculateRentalPrice() {
    var diff = (new Date(this.end).getTime() - new Date(this.start).getTime()) / (1000 * 3600 * 24);
    this.listingService.getListingByListingId(this.listingId).subscribe(
      response => {
        var listing = response;
        this.totalPrice = listing.rentalPrice * diff;
      },
      error => {
        console.log('********** ViewListingDetailsPage.ts: ' + error);
      }
    );
  }*/



  create(createRentalOfferForm: NgForm) {

    this.submitted = true;

    if (createRentalOfferForm.valid) {
      this.offerService.createNewOffer(this.newTotalPrice, new Date(), OfferType.RENTAL, new Date(this.start), new Date(this.end), this.listingId, this.userId).subscribe(
        response => {
          let newOfferCreated: Offer = response;
          this.resultSuccess = true;
          this.resultError = false;
          this.message = "New rental offer " + newOfferCreated + " created successfully";

          this.submitted = false;
          createRentalOfferForm.reset();
        },
        error => {
          this.resultError = true;
          this.resultSuccess = false;
          this.message = "An error has occurred while creating the new rental offer: " + error;

          console.log('********** CreateRentalOfferPage.ts: ' + error);
        }
      );
    }
  }

  back() {
    this.router.navigate(["/viewListingDetails/" + this.listingId]);
  }

}
