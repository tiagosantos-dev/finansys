import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class FolderService {

  private apiPath :string = "http://localhost:3000/folders";

  constructor(private http: HttpClient) { }

  public getAll() {
    return this.http.get(this.apiPath).pipe(catchError(this.handlerError))

  }

  private handlerError(error : any):Observable<any>{
    console.log("Error na requisição", error)
    return throwError(error) 
  }

  public getById(id : number){
    const URL = `${this.apiPath}/${id}`
    return this.http.get(URL).pipe(catchError(this.handlerError))

  }

  public create(folder): Observable<any> {
      return this.http.post(this.apiPath, folder).pipe(catchError(this.handlerError))

  

    
  }

  public update(entry ) {
    const URL = `http://localhost:3000/entries/${entry.id}`;

    
    return this.http.patch(URL, entry).pipe(catchError(this.handlerError))


  }

  public delete(id :number) : Observable<any>{
    return this.http.delete(`${this.apiPath}/${id}`).pipe(catchError(this.handlerError), map(()=> id))

  }

}
