import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OfferType } from '../enums/offer-type.enum';
import { Offer } from '../models/offer';
import { RentalOffer } from '../models/rental-offer';
import { OfferService } from '../services/offer.service';

@Component({
  selector: 'app-create-rental-offer',
  templateUrl: './create-rental-offer.page.html',
  styleUrls: ['./create-rental-offer.page.scss'],
})
export class CreateRentalOfferPage implements OnInit {

  submitted: boolean;
  newRentalOffer: Offer;
  userId: number;
  listingId: number;

  resultSuccess: boolean;
  resultError: boolean;
  message: string;



  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private offerService: OfferService) {
    this.submitted = false;
    this.newRentalOffer = new RentalOffer();
    this.newRentalOffer.offerDate = new Date();
    this.newRentalOffer.offerType = OfferType.RENTAL;

    this.resultSuccess = false;
    this.resultError = false;
  }



  ngOnInit() {
    this.listingId = parseInt(this.activatedRoute.snapshot.paramMap.get('listingId'));
  }



  clear() {
    this.submitted = false;
    this.newRentalOffer = new RentalOffer();
  }



  create(createRentalOfferForm: NgForm) {

    this.submitted = true;

    if (createRentalOfferForm.valid) {
      this.offerService.createNewOffer(this.newRentalOffer, this.listingId, this.userId).subscribe(
        response => {
          let newOfferCreated: Offer = response;
          this.resultSuccess = true;
          this.resultError = false;
          this.message = "New offer " + newOfferCreated.offerId + " created successfully";

          this.newRentalOffer = new RentalOffer();
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

}
