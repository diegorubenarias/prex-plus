import { Component, OnInit } from '@angular/core';
import { CinemaService } from '../../services/cinema.service';
import { Movie } from '../../model/movie.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  movies!: Movie[];
  showEdit = false;

  constructor(
    private service: CinemaService
  ) { }

   ngOnInit() {
    this.service.getMovies().subscribe((movies: Movie[]) => {
      this.movies = movies;
    });
  }


  goToDetail() {
    //this.route.navigate(['edit', this.movie]);
  }

}
