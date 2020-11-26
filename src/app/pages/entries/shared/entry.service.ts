import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { CategoryService } from '../../categories/shared/category.service'
import { Entry } from './entry.model';

@Injectable({
  providedIn: 'root'
})

export class EntryService {

  private apiPath :string = "http://localhost:3000/entries";

  constructor(private http: HttpClient , private categoryService :CategoryService) { }

  public getAll() :Observable<Entry[]>{
    return this.http.get(this.apiPath).pipe(catchError(this.handlerError))

  }

  private handlerError(error : any):Observable<any>{
    console.log("Error na requisição", error)
    return throwError(error) 
  }

  private jsonDataEntries(jsonData: any):Entry[]{
    const entries = [];
    console.log(jsonData)
    jsonData.forEach(element => {
      const entry =  Object.assign(new Entry() , element)
      entries.push(entry)
    });
    return entries;
  }

  public getById(id : number): Observable<Entry>{
    const URL = `${this.apiPath}/${id}`
    return this.http.get(URL).pipe(catchError(this.handlerError))

  }

  public create(entry: Entry) : Observable<Entry>{
    return this.categoryService.getById(entry.categoryId).pipe(mergeMap( category =>{
      entry.category = category
      return this.http.post(this.apiPath, entry).pipe(catchError(this.handlerError))

    }))

    
  }

  public update(entry : Entry) {
    const URL = `http://localhost:3000/entries/${entry.id}`;

    return this.categoryService.getById(entry.categoryId).pipe(mergeMap( category =>{
      entry.category = category
    return this.http.patch(URL, entry).pipe(catchError(this.handlerError))
  }))

  }

  public delete(id :number) : Observable<any>{
    return this.http.delete(`${this.apiPath}/${id}`).pipe(catchError(this.handlerError), map(()=> id))

  }

}
