import { Component, OnInit } from '@angular/core';
import { Movie } from '../../model/movie.model';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent  implements OnInit {

  movie!: Movie;
  showEdit = false;

  constructor(
    private route: Router
  ) { }

  ngOnInit(

  ) {
    this.movie = {
      name: 'Mision Imposible',
      image: '/assets/images/impossible.jpg',
      description: 'Lorem ipsum is placeholder text commonly used in the graphic and visual mockups.',
      rate: 2
    }
  }

  goToDetail() {
    this.route.navigate(['edit', this.movie]);
  }

}
