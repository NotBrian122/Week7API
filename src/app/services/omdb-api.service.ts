import { Injectable } from '@angular/core';

import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { catchError,tap } from 'rxjs';
import { IOMDBResponse } from '../omdbresponse';

@Injectable({
  providedIn: 'root'
})
export class OmdbApiService {

  private _siteURL="https://www.omdbapi.com/"
  private _key="?apiKey=d7b6f4e&t="
  constructor(private _http:HttpClient) { }

  getMovieData(movieName:string):Observable<IOMDBResponse>{
    return this._http.get<IOMDBResponse>(this._siteURL+this._key+movieName)
    .pipe(
      tap(data=> console.log('Moviedata/error' + JSON.stringify(data))
    ),
    catchError(this.handleError)
    );
  }

  private handleError(error:HttpErrorResponse){
    console.log('OmdbApiService:' +error.message);
    return throwError (()=>Error("OmdbApiService:" +error.message))
  }
}
