import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { SessionService } from './session.service';
import { Offer } from '../models/offer';
import { UpdateOfferReq } from '../models/update-offer-req';
import { CreateOfferReq } from '../models/create-offer-req';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  baseUrl: string = "/api/Offer";



  constructor(private httpClient: HttpClient,
    private sessionService: SessionService) {

  }



  getOffers(): Observable<Offer[]> {
    return this.httpClient.get<Offer[]>(this.baseUrl + "/retrieveAllOffers?username=" + this.sessionService.getEmail() + "&password=" + this.sessionService.getPassword()).pipe
      (
        catchError(this.handleError)
      );
  }

  getOfferByOfferId(offerId: number): Observable<Offer> {
    return this.httpClient.get<Offer>(this.baseUrl + "/retrieveOffer/" + offerId + "?username=" + this.sessionService.getEmail() + "&password=" + this.sessionService.getPassword()).pipe
      (
        catchError(this.handleError)
      );
  }


  updateOffer(offerToUpdate: Offer): Observable<any> {
    let updateOfferReq: UpdateOfferReq = new UpdateOfferReq(this.sessionService.getEmail(), this.sessionService.getPassword(), offerToUpdate);

    return this.httpClient.post<any>(this.baseUrl, updateOfferReq, httpOptions).pipe
      (
        catchError(this.handleError)
      );
  }

  acceptOffer(offerId: number): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl + "/acceptOffer/" + offerId + "?username=" + this.sessionService.getEmail() + "&password=" + this.sessionService.getPassword()).pipe
      (
        catchError(this.handleError)
      );
  }

  deleteOffer(offerId: number): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl + "/" + offerId + "?username=" + this.sessionService.getEmail() + "&password=" + this.sessionService.getPassword()).pipe
      (
        catchError(this.handleError)
      );
  }

  createNewOffer(newOffer: Offer, listingId: number, userId: number): Observable<Offer> {
    let createOfferReq: CreateOfferReq = new CreateOfferReq(this.sessionService.getEmail(), this.sessionService.getPassword(), newOffer, userId, listingId);

    return this.httpClient.put<Offer>(this.baseUrl, createOfferReq, httpOptions).pipe
      (
        catchError(this.handleError)
      );
  }

  getOffersByUserId(): Observable<Offer[]> {
    return this.httpClient.get<Offer[]>(this.baseUrl + "/retrieveOfferByUserId?username=" + this.sessionService.getEmail() + "&password=" + this.sessionService.getPassword()).pipe
      (
        catchError(this.handleError)
      );
  }


  getOffersByListingId(listingId: number): Observable<Offer[]> {
    return this.httpClient.get<Offer[]>(this.baseUrl + "/retrieveOfferByListingId/" + listingId + "?username=" + this.sessionService.getEmail() + "&password=" + this.sessionService.getPassword()).pipe
      (
        catchError(this.handleError)
      );
  }


  private handleError(error: HttpErrorResponse) {
    let errorMessage: string = "";

    if (error.error instanceof ErrorEvent) {
      errorMessage = "An unknown error has occurred: " + error.error;
    }
    else {
      errorMessage = "A HTTP error has occurred: " + `HTTP ${error.status}: ${error.error}`;
    }

    console.error(errorMessage);

    return throwError(errorMessage);
  }
}
