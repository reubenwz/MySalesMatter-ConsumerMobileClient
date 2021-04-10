import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { SessionService } from './session.service';
import { Review } from '../models/review';
import { CreateReviewReq } from '../models/create-review-req';
import { UpdateReviewReq } from '../models/update-review-req';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  baseUrl: string = "/api/Review";



  constructor(private httpClient: HttpClient,
    private sessionService: SessionService) {

  }



  getReviews(): Observable<Review[]> {
    return this.httpClient.get<Review[]>(this.baseUrl + "/retrieveAllReviews?username=" + this.sessionService.getEmail() + "&password=" + this.sessionService.getPassword()).pipe
      (
        catchError(this.handleError)
      );
  }

  getReviewsByUserId(userId: number): Observable<Review[]> {
    return this.httpClient.get<Review[]>(this.baseUrl + "/retrieveReviewsByUserId/" + userId + "?username=" + this.sessionService.getEmail() + "&password=" + this.sessionService.getPassword()).pipe
      (
        catchError(this.handleError)
      );
  }

  getReviewByReviewId(reviewId: number): Observable<Review> {
    return this.httpClient.get<Review>(this.baseUrl + "/retrieveReviewByReviewId/" + reviewId + "?username=" + this.sessionService.getEmail() + "&password=" + this.sessionService.getPassword()).pipe
      (
        catchError(this.handleError)
      );
  }

  createNewReview(newReview: Review, reviewerId: number, listingId: number): Observable<Review> {
    let createReviewReq: CreateReviewReq = new CreateReviewReq(newReview, this.sessionService.getEmail(), this.sessionService.getPassword(), reviewerId, listingId);

    return this.httpClient.put<Review>(this.baseUrl, createReviewReq, httpOptions).pipe
      (
        catchError(this.handleError)
      );
  }

  updateReview(reviewId: number, starRating: number, desc: string, pictPath: string): Observable<any> {
    let updateReviewReq: UpdateReviewReq = new UpdateReviewReq(this.sessionService.getEmail(), this.sessionService.getPassword(), reviewId, starRating, pictPath, desc);

    return this.httpClient.post<any>(this.baseUrl, updateReviewReq, httpOptions).pipe
      (
        catchError(this.handleError)
      );
  }

  deleteReview(reviewId: number): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl + "/" + reviewId + "?username=" + this.sessionService.getEmail() + "&password=" + this.sessionService.getPassword()).pipe
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
