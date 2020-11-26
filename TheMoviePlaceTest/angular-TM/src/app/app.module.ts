import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { AppComponent } from './app.component';

import 'hammerjs';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MoviedetailComponent } from './moviedetail/moviedetail.component';
import { MovieComponent } from './movie/movie.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { ProgressSpinnerConfigurableExampleComponent } from './progress-spinner-configurable-example/progress-spinner-configurable-example.component';

import { imageBaseurl, apiKey, apiURL } from './shared/baseurl';

import { MovieService } from './services/movie.service';
import { MoviesortService } from './services/moviesort.service';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MoviedetailComponent,
    MovieComponent,
    MoviesListComponent,
    ProgressSpinnerConfigurableExampleComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({
      radius: 10,
      outerStrokeWidth: 10,
      innerStrokeWidth: 5,
      showBackground: false,
      startFromZero: false,
      showSubtitle: false,
      unitsColor: '#ffffff',
      titleColor: '#ffffff',
    }),
  ],
  entryComponents: [],
  providers: [
    { provide: 'apiURL', useValue: apiURL },
    { provide: 'imageBaseurl', useValue: imageBaseurl },
    { provide: 'apiKey', useValue: apiKey },
    MovieService,
    MoviesortService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
