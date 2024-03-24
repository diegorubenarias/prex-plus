import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Movie } from '../../model/movie.model';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CinemaService } from '../../services/cinema.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent  implements OnInit, OnDestroy {

  @Input()
  movie!: Movie;
  edit: boolean = false;



  constructor(
    private router: ActivatedRoute,
    private cinemaService: CinemaService

  ) { }

  ngOnDestroy(): void {

  }


  ngOnInit() {
    this.router.params.subscribe(params => {
      this.movie = {
        id: params['id'],
        name: params['name'],
        image: params['image'],
        description: params['description'],
        rate: params['rate']

      };
    });

  }

  editMovie() {
    this.cinemaService.editMovie(this.movie);
    this.edit = !this.edit;
  }

  updateRate(value: number) {
    console.log('updated ' + value);
    this.movie.rate = value;
  }


}
