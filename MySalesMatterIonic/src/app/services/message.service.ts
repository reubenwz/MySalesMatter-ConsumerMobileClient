import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { SessionService } from './session.service';
import { Message } from '../models/message';
import { CreateMessageReq } from '../models/create-message-req';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  baseUrl: string = '/api/Message';

  constructor(
    private httpClient: HttpClient,
    private sessionService: SessionService
  ) {}

  retrieveAllMessages(): Observable<Message[]> {
    return this.httpClient
      .get<Message[]>(
        this.baseUrl +
          '/retrieveAllMessages?username=' +
          this.sessionService.getEmail() +
          '&password=' +
          this.sessionService.getPassword()
      )
      .pipe(catchError(this.handleError));
  }

  retrieveReceivedMessagesByUserId(userId: number): Observable<Message[]> {
    return this.httpClient
      .get<Message[]>(
        this.baseUrl +
          '/retrieveReceivedMessagesByUserId/' +
          userId +
          '?username=' +
          this.sessionService.getEmail() +
          '&password=' +
          this.sessionService.getPassword()
      )
      .pipe(catchError(this.handleError));
  }

  // addMessage(message: Message, offerId: number): Observable<Message> {
  //   let createMessageReq: CreateMessageReq = new CreateMessageReq(
  //     this.sessionService.getEmail(),
  //     this.sessionService.getPassword(),
  //     message.message,
  //     //offerId,
  //     this.sessionService.getCurrentUser().userId,
  //     message.recipient.userId,
  //     new Date()
  //   );
  //   return this.httpClient
  //     .put<Message>(this.baseUrl + '/addMessage', createMessageReq, httpOptions)
  //     .pipe(catchError(this.handleError));
  // }
  addMessage(
    message: Message,
    recipientId: number,
    offerId: number
  ): Observable<Message> {
    let createMessageReq: CreateMessageReq = new CreateMessageReq(
      this.sessionService.getEmail(),
      this.sessionService.getPassword(),
      message.message,
      offerId,
      this.sessionService.getCurrentUser().userId,
      recipientId,
      new Date()
    );
    return this.httpClient
      .put<Message>(this.baseUrl + '/addMessage', createMessageReq, httpOptions)
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
