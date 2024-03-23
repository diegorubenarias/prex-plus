import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CinemaRoutingModule } from './cinema-routing.module';
import { LoginPage } from './pages/login/login.page';
import { SignUpPage } from './pages/sign-up/sign-up.page';
import { HomePage } from './pages/home/home.page';
import { RateMovieComponent } from './components/rate-movie/rate-movie.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { CustomLogoComponent } from './components/custom-logo/custom-logo.component';



@NgModule({
  declarations: [
    LoginPage,
    SignUpPage,
    HomePage,
    RateMovieComponent,
    MovieDetailComponent,
    MovieCardComponent,
    CustomLogoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CinemaRoutingModule,
  ]
})
export class CinemaModule { }

