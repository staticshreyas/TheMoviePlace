import { Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { MoviedetailComponent } from '../moviedetail/moviedetail.component';
import { MoviesListComponent } from '../movies-list/movies-list.component';
import { ProfileComponent } from '../profile/profile.component';


export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'moviedetail/:id', component: MoviedetailComponent },
  { path: ':category', component: MoviesListComponent },

];
