import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { SessionService } from '../services/session.service';
import { Listing } from '../models/listing';
import { CreateListingReq } from '../models/create-listing-req';
import { UpdateListingReq } from '../models/update-listing-req';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class ListingService {
  baseUrl: string = '/api/Listing';

  constructor(
    private httpClient: HttpClient,
    private sessionService: SessionService
  ) {}

  getListings(): Observable<Listing[]> {
    return this.httpClient
      .get<Listing[]>(
        this.baseUrl +
          '/retrieveAllListings?username=' +
          this.sessionService.getEmail() +
          '&password=' +
          this.sessionService.getPassword()
      )
      .pipe(catchError(this.handleError));
  }

  getListingByListingId(listingId: number): Observable<Listing> {
    return this.httpClient
      .get<Listing>(
        this.baseUrl +
          '/retrieveListingByListingId/' +
          listingId +
          '?username=' +
          this.sessionService.getEmail() +
          '&password=' +
          this.sessionService.getPassword()
      )
      .pipe(catchError(this.handleError));
  }

  getListingsByUser(): Observable<Listing[]> {
    return this.httpClient
      .get<Listing[]>(
        this.baseUrl +
          '/retrieveListingsByUser?username=' +
          this.sessionService.getEmail() +
          '&password=' +
          this.sessionService.getPassword()
      )
      .pipe(catchError(this.handleError));
  }

  createNewListing(
    newListing: Listing,
    categoryId: number | null,
    userId: number,
    tagIds: number[]
  ): Observable<number> {
    let createListingReq: CreateListingReq = new CreateListingReq(
      newListing.name,
      newListing.description,
      newListing.brand,
      newListing.rentalPrice,
      newListing.salePrice,
      newListing.location,
      this.sessionService.getEmail(),
      this.sessionService.getPassword(),
      userId,
      categoryId,
      tagIds
    );
    console.log(
      '********** DEBUG listingService.ts brand : ' +
        newListing.brand +
        'createListingReq brand: ' +
        createListingReq.brand +
        'createListingReq userId: ' +
        createListingReq.userId
    );
    return this.httpClient
      .put<number>(
        this.baseUrl + '/createNewListing',
        createListingReq,
        httpOptions
      )
      .pipe(catchError(this.handleError));
  }

  searchListingsByName(name: string): Observable<Listing[]> {
    return this.httpClient
      .get<Listing[]>(
        this.baseUrl +
          '/searchListingsByName/' +
          name +
          '?username=' +
          this.sessionService.getEmail() +
          '&password=' +
          this.sessionService.getPassword()
      )
      .pipe(catchError(this.handleError));
  }

  filterListingsByCategory(categoryId: number): Observable<Listing[]> {
    return this.httpClient
      .get<Listing[]>(
        this.baseUrl +
          '/filterListingsByCategory/' +
          categoryId +
          '?username=' +
          this.sessionService.getEmail() +
          '&password=' +
          this.sessionService.getPassword()
      )
      .pipe(catchError(this.handleError));
  }

  updateListing(
    listingToUpdate: Listing,
    categoryId: number | undefined | null,
    tagIds: number[]
  ): Observable<any> {
    let updateListingReq: UpdateListingReq = new UpdateListingReq(
      this.sessionService.getEmail(),
      this.sessionService.getPassword(),
      categoryId,
      tagIds,
      listingToUpdate.name,
      listingToUpdate.description,
      listingToUpdate.brand,
      listingToUpdate.rentalPrice,
      listingToUpdate.salePrice,
      listingToUpdate.location,
      listingToUpdate.listingId
    );

    return this.httpClient
      .post<any>(this.baseUrl, updateListingReq, httpOptions)
      .pipe(catchError(this.handleError));
  }

  deleteListing(listingId: number): Observable<any> {
    return this.httpClient
      .delete<any>(
        this.baseUrl +
          '/' +
          listingId +
          '?username=' +
          this.sessionService.getEmail() +
          '&password=' +
          this.sessionService.getPassword()
      )
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage: string = '';

    if (error.error instanceof ErrorEvent) {
      errorMessage = 'An unknown error has occurred: ' + error.error;
    } else {
      errorMessage =
        'A HTTP error has occurred: ' + `HTTP ${error.status}: ${error.error}`;
    }

    console.error(errorMessage);

    return throwError(errorMessage);
  }
}
