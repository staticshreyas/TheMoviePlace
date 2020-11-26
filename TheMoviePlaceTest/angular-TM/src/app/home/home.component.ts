import { MovieService } from '../services/movie.service';
import { Component, OnInit } from '@angular/core';

import { MoviesortService } from '../services/moviesort.service';

import {Movie} from '../shared/movie'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  moviesList: Movie;
  popular=[];
  listName = 'Now Playing';


  constructor(
    private storage: MovieService,
    private movies: MoviesortService,
  ) {
    movies.searchFilterEmited$.subscribe(
      filter => {
          this.search(filter);
          this.listName = 'Search results of: ' + filter;
      });
  }
  ngOnInit() {
        this.getList("now_playing");
        
  }

  getList(category) {
    this.storage.getList(category)
    .subscribe(
      (response) => {
        this.moviesList = response['results'];
        for(var i=0;i<3;i++){
          this.popular[i]=this.moviesList[i];
        }
        this.sortByPopularity(this.moviesList);
      }
    );
  }

  search(query) {
    this.storage.search(query)
    .subscribe(
      (response) => {
  
        this.moviesList = response['results'];
        this.sortByPopularity(this.moviesList);
      }
    );
  }

  sortByPopularity(list) {
    this.movies.sortByPopularity(list);
    }

}
