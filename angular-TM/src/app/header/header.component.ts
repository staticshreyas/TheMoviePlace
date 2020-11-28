import { Component, OnInit } from '@angular/core';
import { MoviesortService } from '../services/moviesort.service';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  filter= '';


  constructor(    
    private movies: MoviesortService,
    ) { }

  ngOnInit(): void {
  }

  search(filter) {
    this.movies.emitChange(filter);
  }

}
