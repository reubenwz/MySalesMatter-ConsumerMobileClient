import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { SessionService } from './session.service';
import { Message } from '../models/message';
import { CreateMessageReq } from '../models/create-message-req';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  baseUrl: string = "/api/Message";

  constructor(private httpClient: HttpClient,
    private sessionService: SessionService) { }

    retrieveAllMessages(): Observable<Message[]> {
      return this.httpClient.get<Message[]>(this.baseUrl + "/retrieveAllMessages?username=" + this.sessionService.getEmail() + "&password=" + this.sessionService.getPassword()).pipe
        (
          catchError(this.handleError)
        );
    }

    retrieveReceivedMessageSByUserId(userId: number): Observable<Message> {
      return this.httpClient.get<Message>(this.baseUrl + "/retrieveReceivedMessageSByUserId/" + userId + "?username=" + this.sessionService.getEmail() + "&password=" + this.sessionService.getPassword()).pipe
        (
          catchError(this.handleError)
        );
    }


  //   addMessage(message: string, offerId: number, senderId: number, date: Date): Observable<Message> {
  //     let createMessageReq: CreateMessageReq = new CreateMessageReq(this.sessionService.getEmail(), this.sessionService.getPassword(), message, offerId, senderId, date);
  
  //     return this.httpClient.put<Message>(this.baseUrl, createReviewReq, httpOptions).pipe
  //     (
  //       catchError(this.handleError)
  //     );
  // }


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
function createReviewReq<T>(baseUrl: string, createReviewReq: any, httpOptions: any) {
  throw new Error('Function not implemented.');
}

function httpOptions<T>(baseUrl: string, createReviewReq: <T>(baseUrl: string, createReviewReq: any, httpOptions: any) => void, httpOptions: any) {
  throw new Error('Function not implemented.');
}

