import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { SessionService } from './session.service';
import { Category } from '../models/category';

import { CreateCategoryReq } from '../models/create-category-req';
import { UpdateCategoryReq } from '../models/update-category-req';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class CategoryService {


  baseUrl: string = "/api/Category";



  constructor(private httpClient: HttpClient,
    private sessionService: SessionService) {

  }



  getCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.baseUrl + "/retrieveAllCategories?username=" + this.sessionService.getEmail() + "&password=" + this.sessionService.getPassword()).pipe
      (
        catchError(this.handleError)
      );
  }

  getRootCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.baseUrl + "/retrieveAllRootCategories?username=" + this.sessionService.getEmail() + "&password=" + this.sessionService.getPassword()).pipe
      (
        catchError(this.handleError)
      );
  }



  getLeafCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.baseUrl + "/retrieveAllLeafCategories?username=" + this.sessionService.getEmail() + "&password=" + this.sessionService.getPassword()).pipe
      (
        catchError(this.handleError)
      );
  }

  getCategoriesWithoutListing(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.baseUrl + "/retrieveAllCategoriesWithoutListing?username=" + this.sessionService.getEmail() + "&password=" + this.sessionService.getPassword()).pipe
      (
        catchError(this.handleError)
      );
  }

  getCategoryByCategoryId(categoryId: number): Observable<Category> {
    return this.httpClient.get<Category>(this.baseUrl + "/retrieveCategoryByCategoryId/" + categoryId + "?username=" + this.sessionService.getEmail() + "&password=" + this.sessionService.getPassword()).pipe
      (
        catchError(this.handleError)
      );
  }

  createNewCategory(newCategory: Category, parentCategoryId: number | null): Observable<Category> {
    let createCategoryReq: CreateCategoryReq = new CreateCategoryReq(this.sessionService.getEmail(), this.sessionService.getPassword(), newCategory, parentCategoryId);

    return this.httpClient.put<Category>(this.baseUrl, createCategoryReq, httpOptions).pipe
      (
        catchError(this.handleError)
      );
  }



  updateCategory(categoryToUpdate: Category, parentCategoryId: number | null): Observable<any> {
    let updateCategoryReq: UpdateCategoryReq = new UpdateCategoryReq(this.sessionService.getEmail(), this.sessionService.getPassword(), categoryToUpdate, parentCategoryId);

    return this.httpClient.post<any>(this.baseUrl, updateCategoryReq, httpOptions).pipe
      (
        catchError(this.handleError)
      );
  }

  deleteCategory(categoryId: number): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl + "/" + categoryId + "?username=" + this.sessionService.getEmail() + "&password=" + this.sessionService.getPassword()).pipe
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
