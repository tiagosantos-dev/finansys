import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, map, flatMap } from 'rxjs/operators';

import { Category } from '../shared/category.model';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {

  private apiPath :string = "api/categories";

  constructor(private http: HttpClient ) { }

  public getAll() :Observable<Category[]>{
    return this.http.get(this.apiPath).pipe(catchError(this.handlerError))

  }

  private handlerError(error : any):Observable<any>{
    console.log("Error na requisição", error)
    return throwError(error) 
  }

  private jsonDataCategories(jsonData: any):Category[]{
    const categories = [];
    jsonData.forEach(element => {
      categories.push(element as Category)
    });
    return categories;
  }

  public getById(id : number): Observable<Category>{
    const URL = `${this.apiPath}/${id}`
    return this.http.get(URL).pipe(catchError(this.handlerError))

  }

  public create(category: Category) : Observable<Category>{
    return this.http.post(this.apiPath, category).pipe(catchError(this.handlerError))

  }

  public update(category : Category) : Observable<Category>{
    const URL = `${this.apiPath}/ ${category.id}`;
    return this.http.put(URL, category).pipe(catchError(this.handlerError), map(()=> category));

  }

  public delete(id :number) : Observable<any>{
    return this.http.delete(`${this.apiPath}/${id}`).pipe(catchError(this.handlerError), map(()=> id))

  }

}
