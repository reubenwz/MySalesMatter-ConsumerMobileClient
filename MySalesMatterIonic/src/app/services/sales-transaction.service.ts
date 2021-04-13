import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { SessionService } from './session.service';
import { SalesTransaction } from '../models/sales-transaction';
import { CreateSalesTransactionReq } from '../models/create-sales-transaction-req';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SalesTransactionService {

  baseUrl: string = "/api/SalesTransaction";



  constructor(private httpClient: HttpClient,
    private sessionService: SessionService) {

  }



  getTransactions(): Observable<SalesTransaction[]> {
    return this.httpClient.get<SalesTransaction[]>(this.baseUrl + "/retrieveAllTransactions?username=" + this.sessionService.getEmail() + "&password=" + this.sessionService.getPassword()).pipe
      (
        catchError(this.handleError)
      );
  }

  getTransactionByUserId(): Observable<SalesTransaction[]> {
    return this.httpClient.get<SalesTransaction[]>(this.baseUrl + "/retrieveTransactionByUserId?username=" + this.sessionService.getEmail() + "&password=" + this.sessionService.getPassword()).pipe
      (
        catchError(this.handleError)
      );
  }

  getTransactionById(transactionId: number): Observable<SalesTransaction> {
    return this.httpClient.get<SalesTransaction>(this.baseUrl + "/retrieveTransaction/" + transactionId + "?username=" + this.sessionService.getEmail() + "&password=" + this.sessionService.getPassword()).pipe
      (
        catchError(this.handleError)
      );
  }

  createNewTransaction(offerId: number, userId: number, transactionDate: Date, totalAmt: number, ccName: string, ccNum: string, cvv: string, expiry: string): Observable<SalesTransaction> {
    let createSalesTransactionReq: CreateSalesTransactionReq = new CreateSalesTransactionReq(this.sessionService.getEmail(), this.sessionService.getPassword(), offerId, userId, transactionDate, totalAmt, ccName, ccNum, cvv, expiry);

    return this.httpClient.put<SalesTransaction>(this.baseUrl, createSalesTransactionReq, httpOptions).pipe
      (
        catchError(this.handleError)
      );
  }


  deleteTransaction(transactionIda: number): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl + "/" + transactionIda + "?username=" + this.sessionService.getEmail() + "&password=" + this.sessionService.getPassword()).pipe
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
