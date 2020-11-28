import { MovieService } from '../services/movie.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  @Input() movie;
  @Input() carousel;
  movieDetails = {};
  imgBaseUrl: string;
  posterUrl: string;
  backdropUrl: string;
  date: string;
  display = false;
  displayButton = 'Display details';

  constructor(
    private storage: MovieService,
  ) { }

  ngOnInit() {
    if (this.movie.poster_path === null) {
      this.posterUrl = 'http://via.placeholder.com/154x218?text=Not+avaliable';
    } else {
      this.imgBaseUrl = this.storage.getImageBaseUrl()
      this.posterUrl = this.imgBaseUrl + 'w300_and_h450_bestv2' + this.movie.poster_path;
    }
    if (this.movie.backdrop_path === null) {
      this.backdropUrl = 'http://via.placeholder.com/154x218?text=Not+avaliable';
    } else {
      this.imgBaseUrl = this.storage.getImageBaseUrl()
      this.backdropUrl = this.imgBaseUrl + 'w154' + this.movie.backdrop_path;
    }
  }

}
