import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { SessionService } from './session.service';
import { User } from '../models/user';
import { UpdateUserReq } from '../models/update-user-req';
import { CreateUserReq } from '../models/create-user-req';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string = "/api/User";



  constructor(private httpClient: HttpClient,
    private sessionService: SessionService) {

  }



  userLogin(): Observable<User> {
    return this.httpClient.get<User>(this.baseUrl + "/userLogin?username=" + this.sessionService.getEmail() + "&password=" + this.sessionService.getPassword()).pipe
      (
        catchError(this.handleError)
      );
  }

  getUserById(userId: number): Observable<User> {
    return this.httpClient.get<User>(this.baseUrl + "/retrieveUserById/" + userId).pipe
      (
        catchError(this.handleError)
      );
  }

  getUserByEmail(email: string): Observable<User> {
    return this.httpClient.get<User>(this.baseUrl + "/retrieveUserByEmail/" + email).pipe
      (
        catchError(this.handleError)
      );
  }

  registerUser(newUser: User): Observable<User> {
    let createUserReq: CreateUserReq = new CreateUserReq(newUser);

    return this.httpClient.put<User>(this.baseUrl, createUserReq, httpOptions).pipe
      (
        catchError(this.handleError)
      );
  }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.baseUrl + "/retrieveAllUsers?username=" + this.sessionService.getEmail() + "&password=" + this.sessionService.getPassword()).pipe
      (
        catchError(this.handleError)
      );
  }

  updateUser(userToUpdate: User): Observable<any> {
    let updateUserReq: UpdateUserReq = new UpdateUserReq(this.sessionService.getEmail(), this.sessionService.getPassword(), userToUpdate);

    return this.httpClient.post<any>(this.baseUrl, updateUserReq, httpOptions).pipe
      (
        catchError(this.handleError)
      );
  }

  deleteUser(userId: number): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl + "/" + userId + "?username=" + this.sessionService.getEmail() + "&password=" + this.sessionService.getPassword()).pipe
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
