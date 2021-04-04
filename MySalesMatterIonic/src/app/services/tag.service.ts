import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { SessionService } from './session.service';
import { Tag } from '../models/tag';
import { CreateTagReq } from '../models/create-tag-req';
import { UpdateTagReq } from '../models/update-tag-req';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TagService {

  baseUrl: string = "/api/Tag";



  constructor(private httpClient: HttpClient,
    private sessionService: SessionService) {

  }



  getTags(): Observable<Tag[]> {
    return this.httpClient.get<Tag[]>(this.baseUrl + "/retrieveAllTags?username=" + this.sessionService.getEmail() + "&password=" + this.sessionService.getPassword()).pipe
      (
        catchError(this.handleError)
      );
  }

  getTagByTagId(tagId: number): Observable<Tag> {
    return this.httpClient.get<Tag>(this.baseUrl + "/retrieveTag/" + tagId + "?username=" + this.sessionService.getEmail() + "&password=" + this.sessionService.getPassword()).pipe
      (
        catchError(this.handleError)
      );
  }

  createNewTag(newTag: Tag): Observable<Tag> {
    let createTagReq: CreateTagReq = new CreateTagReq(this.sessionService.getEmail(), this.sessionService.getPassword(), newTag);

    return this.httpClient.put<Tag>(this.baseUrl, createTagReq, httpOptions).pipe
      (
        catchError(this.handleError)
      );
  }



  updateTag(tagToUpdate: Tag): Observable<any> {
    let updateTagReq: UpdateTagReq = new UpdateTagReq(this.sessionService.getEmail(), this.sessionService.getPassword(), tagToUpdate);

    return this.httpClient.post<any>(this.baseUrl, updateTagReq, httpOptions).pipe
      (
        catchError(this.handleError)
      );
  }

  deleteTag(tagId: number): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl + "/" + tagId + "?username=" + this.sessionService.getEmail() + "&password=" + this.sessionService.getPassword()).pipe
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
