import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MoviesortService {
  listSorted = false;

  constructor(  ) { }

  private searchFilter = new Subject<any>();
  searchFilterEmited$ = this.searchFilter.asObservable();
  emitChange(change: any) {
      this.searchFilter.next(change);
  }

  sortByPopularity(list) {
    list.sort(
      (a, b) => {
        if (a.popularity > b.popularity) {
          return -1;
        }
        if (a.popularity < b.popularity) {
          return 1;
        }
      return 0 ;
      });
    }

  sortBYRating(list){
    list.sort(
      (a, b) => {
        if (a.vote_average > b.vote_average) {
          return -1;
        }
        if (a.vote_average < b.vote_average) {
          return 1;
        }
      return 0 ;
      });
  }
  sortBYDate(list){
    list.sort(
      
      (a, b) => {
        var e=a.release_date.toString().slice(0,4);var f=b.release_date.toString().slice(0,4);
        var c= parseInt(e, 10);var d=parseInt(f,10);
        console.log(e);console.log(f);
        if (c > d) {
          return -1;
        }
        if (c < d) {
          return 1;
        }
      return 0 ;
      });
  }

  
  sortList(list) {
    if (!this.listSorted) {
      this.listSorted = true;
      list = list.sort(
      (a, b) => {
        a.title = a.title.toLowerCase();
        b.title = b.title.toLowerCase();
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
      return 0 ;
      });
    } else {
      this.listSorted = false;
      list = list.sort(
        (a, b) => {
          a.title = a.title.toLowerCase();
          b.title = b.title.toLowerCase();
          if (a.title > b.title) {
            return -1;
          }
          if (a.title < b.title) {
            return 1;
          }
        return 0 ;
      });
    }
    return list;
  }


}
