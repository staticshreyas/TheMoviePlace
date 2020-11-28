import { MovieService } from '../services/movie.service';
import { Component, OnInit } from '@angular/core';

import { MoviesortService } from '../services/moviesort.service';
import { ActivatedRoute, Params } from '@angular/router';

import {Movie} from '../shared/movie'

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  moviesList: Movie;
  listName = '';


  constructor(
    private storage: MovieService,
    private movies: MoviesortService,
    private route: ActivatedRoute,
  ) {
    movies.searchFilterEmited$.subscribe(
      filter => {
          this.search(filter);
          this.listName = 'Search results of: ' + filter;
      });
  }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        if (params.category === undefined) {
          this.getList('upcoming');
        } else {
        this.getList(params.category);
        }
      }
    );
  }

  getList(category) {
    this.storage.getList(category)
    .subscribe(
      (response) => {
        this.moviesList = response['results'];
        this.listName = category[0].toUpperCase() + category.slice(1)
        .replace(/_/g, ' ');
        if(this.listName=='Popular'){
          console.log(this.listName)
          this.sortByPopularity(this.moviesList);
          console.log(this.moviesList)
        }
        else if(this.listName=='Top Rated'){
          console.log(this.listName)
          this.sortByRating(this.moviesList);
          console.log(this.moviesList)

        }   
        else if(this.listName=='Upcoming'){
          console.log(this.listName)
          this.sortByDate(this.moviesList);
          console.log(this.moviesList)

        }      

      }
    );
  }

  search(query) {
    this.storage.search(query)
    .subscribe(
      (response) => {
        this.moviesList = response['results'];
        if(this.listName=='Popular'){
          console.log(this.listName)
          this.sortByPopularity(this.moviesList);
          console.log(this.moviesList)
        }
        else if(this.listName=='Top Rated'){
          console.log(this.listName)
          this.sortByRating(this.moviesList);
        }
      }
    );
  }

  sortByPopularity(list) {
    this.movies.sortByPopularity(list);
    }
    sortByRating(list){
      this.movies.sortBYRating(list);

    }
    sortByDate(list){
      this.movies.sortBYDate(list);

    }

  /*sortList() {
    this.movies.sortList(this.moviesList);
  }*/ 
}