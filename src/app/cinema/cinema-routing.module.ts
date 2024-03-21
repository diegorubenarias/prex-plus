import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPage } from './pages/login/login.page';
import { SignUpPage } from './pages/sign-up/sign-up.page';
import { HomePage } from './pages/home/home.page';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  },
  {
    path: 'sign-up',
    component: SignUpPage
  },
  {
    path: 'home',
    component: HomePage
  },
  {
    path: 'edit',
    component: MovieDetailComponent
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CinemaRoutingModule {}
