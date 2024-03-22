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

  async ngOnInit() {
    await this.service.getMovies().then((movies: Movie[]) => {

      this.movies = movies;
    });
  }


  goToDetail() {
    //this.route.navigate(['edit', this.movie]);
  }

}
