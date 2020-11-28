import { Component, Input, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-movie-detail',
  templateUrl: './moviedetail.component.html',
  styleUrls: ['./moviedetail.component.scss']
})
export class MoviedetailComponent implements OnInit {
  @Input() movie;
  imgBaseUrl: string;
  rating: number;
  date: string;
  date2:string;
  certification:string;
  imdbLink = 'http://www.imdb.com/title';
  cast=[];
  crew=[];
  director=[];
  producer=[];
  screenplay=[];
  trailer:string;
  err: string;
  subs: any;


  constructor(
    private storage: MovieService,
    private route: ActivatedRoute,

  ) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {

        this.storage.getMovie(params.id).subscribe(
          (response) => {
            this.movie = response;
            this.rating=this.movie.vote_average*10;
            console.log(this.rating)
            this.date=this. movie.release_date.slice(0,4);
            this.date2= this.movie.release_date.replace(/-/g,'/')
            //console.log(this.movie.id)

            this.subs=this.storage.getCredits(this.movie.id).subscribe(
              (res)=>{
                console.log(this.movie.id)
                console.log(res);
                this.cast=res['cast']
                this.crew=res['crew']
                console.log(this.cast)
                console.log(this.crew)
                this.cast=this.cast.filter(cast=>cast.profile_path)
                console.log(this.cast)
                this.director=this.crew.filter(director=>director.job=="Director")
                this.producer=this.crew.filter(producer=>producer.job=="Producer")
                this.screenplay=this.crew.filter(screenplay=>screenplay.job=="Screenplay")

              }
            )

            this.storage.getCertification(params.id).subscribe(
              (res)=> {
                console.log(res);
                this.certification=res['results'][0].release_dates[0].certification;
                console.log(this.certification);
              }
            )

            this.storage.getTrailer(params.id).subscribe(
              (res)=> {
                this.trailer=res['results'][0].key;
                console.log(this.certification);
              }
            )

           } ,(errmssg)=>{
              this.err=errmssg;
           }
        );
      
      }
    );
  }
  ngOnDestroy()
  {
    this.subs.unsubscribe();
  }
}
