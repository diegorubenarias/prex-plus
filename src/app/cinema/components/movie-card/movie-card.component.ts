import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../model/movie.model';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent  implements OnInit {

  @Input()
  movie!: Movie;
  showEdit = false;

  constructor(
    private route: Router
  ) { }

  async ngOnInit(

  ) {

  }

  goToDetail() {
    this.route.navigate(['edit', this.movie]);
  }

}
