import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Offer } from '../models/offer';
import { OfferService } from '../services/offer.service';
import { SalesTransactionService } from '../services/sales-transaction.service';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-make-payment',
  templateUrl: './make-payment.page.html',
  styleUrls: ['./make-payment.page.scss'],
})
export class MakePaymentPage implements OnInit {

  message: string;
  error: boolean;
  errorMessage: string;
  resultSuccess: boolean;
  name: string;
  num: string;
  cvvNum: string;
  expiryDate: string;
  offerId: number;
  submitted: boolean;
  totalPrice: number;
  offer: Offer;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private offerService: OfferService, private sessionService: SessionService, private salesTransactionService: SalesTransactionService, public alertController: AlertController) { }

  ngOnInit() {
    this.offerId = parseInt(this.activatedRoute.snapshot.paramMap.get('offerId'));
    this.offerService.getOfferByOfferId(this.offerId).subscribe(
      response => {
        this.offer = response;
        this.totalPrice = (this.offer.totalPrice / this.offer.listing.rentalPrice) * 5;
      },
      error => {
        console.log('********** MakePaymentPage.ts: ' + error);
      }
    )
  }

  async create(makePaymentForm: NgForm) {
    this.submitted = true;
    if (makePaymentForm.valid) {
      const alert = await this.alertController.create({
        header: 'Confirm Payment',
        message: 'Confirm payment for offer <strong>' + this.offerId + '</strong>?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              this.message = "Payment failed!";
            }
          }, {
            text: 'Confirm Payment',
            handler: () => {
              this.salesTransactionService.createNewTransaction(this.offerId, this.sessionService.getCurrentUser().userId, new Date(), this.totalPrice, this.name, this.num, this.cvvNum, this.expiryDate).subscribe(
                response => {
                  this.resultSuccess = true;
                  this.message = "Payment made!";
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
  }

}
