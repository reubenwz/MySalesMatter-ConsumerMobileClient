import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { SessionService } from './session.service';
import { LikedItem } from '../models/liked-item';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'text/plain' })
};

@Injectable({
  providedIn: 'root'
})
export class LikedItemService {

  baseUrl: string = "/api/LikedItem";



  constructor(private httpClient: HttpClient,
    private sessionService: SessionService) {

  }



  getLikedItems(): Observable<LikedItem[]> {
    return this.httpClient.get<LikedItem[]>(this.baseUrl + "/getLikedItems?username=" + this.sessionService.getEmail() + "&password=" + this.sessionService.getPassword()).pipe
      (
        catchError(this.handleError)
      );
  }

  getLikedItemById(likedItemId: number): Observable<LikedItem> {
    return this.httpClient.get<LikedItem>(this.baseUrl + "/retrieveLikedItemById/" + likedItemId + "?username=" + this.sessionService.getEmail() + "&password=" + this.sessionService.getPassword()).pipe
      (
        catchError(this.handleError)
      );
  }

  createNewLikedItem(listingId: number): Observable<LikedItem> {
    return this.httpClient.put<LikedItem>(this.baseUrl + "/createNewLikedItem/" + listingId + "?username=" + this.sessionService.getEmail() + "&password=" + this.sessionService.getPassword(), listingId.toString, httpOptions).pipe
      (
        catchError(this.handleError)
      );
  }



  unlikeItem(listingId: number): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + "/unlikeItem/" + listingId + "?username=" + this.sessionService.getEmail() + "&password=" + this.sessionService.getPassword(), listingId.toString, httpOptions).pipe
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
