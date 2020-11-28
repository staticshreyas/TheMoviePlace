import { HttpClient, HttpHeaders  } from '@angular/common/http';

import { Movie } from '../shared/movie';

import { Observable, of } from 'rxjs';
import { delay , catchError } from 'rxjs/operators';

import { ProcessHTTPMsgService } from './process-httpmsg-service.service';

import { Injectable } from '@angular/core';

import { apiURL, apiKey, imageBaseurl } from '../shared/baseurl';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }


    getList(category): Observable<Movie[]> {
      return this.http.get<Movie[]>("http://localhost:3000/getMovieList", {params: {mov:category}}) 
      .pipe(delay(2000))    
      .pipe(catchError(this.processHTTPMsgService.handleError));
      ;
    }

  //  getList(category): Observable<Movie[]> {
  //   return this.http.get<Movie[]>(apiURL + '3/movie/' + category + apiKey) 
  //   .pipe(delay(2000))    
  //   .pipe(catchError(this.processHTTPMsgService.handleError));
  //   ;
  // }

  getImageBaseUrl() {
    return imageBaseurl;
   }

  //  getCredits(movie): Observable<any>{
  //    return this.http.get<any>(apiURL + '3/movie/'+movie+"/credits"+apiKey)
  //    .pipe(catchError(this.processHTTPMsgService.handleError));
  //  }

   getCredits(movie): Observable<any>{
    return this.http.get<any>("http://localhost:3000/getCredits", {params: {mov:movie}})
    .pipe(catchError(this.processHTTPMsgService.handleError));

  }

  search(query) {
    query = this.convertToSlug(query);
    return this.http.get( apiURL + '3/search/movie' + apiKey + '&query=' + query )
    .pipe(catchError(this.processHTTPMsgService.handleError));

  }

  convertToSlug(string) {
    string = string.toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '+')
      .replace(/-+/g, '+');
    return string;
  }

  getMovie(id){
    return this.http.get( "http://localhost:3000/getCredits", {params: {mov:id}})
    .pipe(delay(3000))     
    .pipe(catchError(this.processHTTPMsgService.handleError));

  }

  // getMovie(id){
  //   return this.http.get( apiURL + '3/movie/' +id+ apiKey+ "&language=en-US")
  //   .pipe(delay(3000))     
  //   .pipe(catchError(this.processHTTPMsgService.handleError));

  // }

  getCertification(id){
    return this.http.get( apiURL + '3/movie/' +id+ "/release_dates" + apiKey)
    .pipe(catchError(this.processHTTPMsgService.handleError));

  }

  getTrailer(id){
    return this.http.get( apiURL + '3/movie/' +id+ "/videos" + apiKey)
    .pipe(catchError(this.processHTTPMsgService.handleError));

  }

}

