import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CinemaService } from '../../services/cinema.service';
import { Movie } from '../../model/movie.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, OnChanges {

  movies!: Movie[];
  showEdit = false;

  constructor(
    private service: CinemaService
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

   ngOnInit() {
    this.service.getMovies().subscribe((movies: Movie[]) => {
      this.movies = movies;
    });
  }


  logout() {
    //this.route.navigate(['edit', this.movie]);
  }

}
