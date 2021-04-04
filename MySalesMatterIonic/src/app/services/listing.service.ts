import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { SessionService } from '../services/session.service';
import { Listing } from '../models/listing';
import { CreateListingReq } from '../models/create-listing-req';
import { UpdateListingReq } from '../models/update-listing-req';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ListingService {

  baseUrl: string = "/api/Listing";



  constructor(private httpClient: HttpClient,
    private sessionService: SessionService) {

  }



  getListings(): Observable<Listing[]> {
    return this.httpClient.get<Listing[]>(this.baseUrl + "/retrieveAllListings?username=" + this.sessionService.getEmail() + "&password=" + this.sessionService.getPassword()).pipe
      (
        catchError(this.handleError)
      );
  }

  getListingByListingId(listingId: number): Observable<Listing> {
    return this.httpClient.get<Listing>(this.baseUrl + "/retrieveListingByListingId/" + listingId + "?username=" + this.sessionService.getEmail() + "&password=" + this.sessionService.getPassword()).pipe
      (
        catchError(this.handleError)
      );
  }

  getListingsByUser(): Observable<Listing[]> {
    return this.httpClient.get<Listing[]>(this.baseUrl + "/retrieveListingsByUser?username=" + this.sessionService.getEmail() + "&password=" + this.sessionService.getPassword()).pipe
      (
        catchError(this.handleError)
      );
  }

  createNewListing(newListing: Listing, categoryId: number | null, userId: number, tagIds: number[]): Observable<Listing> {
    let createListingReq: CreateListingReq = new CreateListingReq(this.sessionService.getEmail(), this.sessionService.getPassword(), newListing, userId, categoryId, tagIds);

    return this.httpClient.put<Listing>(this.baseUrl, createListingReq, httpOptions).pipe
      (
        catchError(this.handleError)
      );
  }

  searchListingsByName(name: string): Observable<Listing[]> {
    return this.httpClient.get<Listing[]>(this.baseUrl + "/searchListingsByName/" + name + "?username=" + this.sessionService.getEmail() + "&password=" + this.sessionService.getPassword()).pipe
      (
        catchError(this.handleError)
      );
  }

  filterListingsByCategory(categoryId: number): Observable<Listing[]> {
    return this.httpClient.get<Listing[]>(this.baseUrl + "/filterListingsByCategory/" + categoryId + "?username=" + this.sessionService.getEmail() + "&password=" + this.sessionService.getPassword()).pipe
      (
        catchError(this.handleError)
      );
  }

  updateListing(listingToUpdate: Listing, categoryId: number | null, tagIds: number[]): Observable<any> {
    let updateListingReq: UpdateListingReq = new UpdateListingReq(this.sessionService.getEmail(), this.sessionService.getPassword(), listingToUpdate, categoryId, tagIds);

    return this.httpClient.post<any>(this.baseUrl, updateListingReq, httpOptions).pipe
      (
        catchError(this.handleError)
      );
  }

  deleteListing(listingId: number): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl + "/" + listingId + "?username=" + this.sessionService.getEmail() + "&password=" + this.sessionService.getPassword()).pipe
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
