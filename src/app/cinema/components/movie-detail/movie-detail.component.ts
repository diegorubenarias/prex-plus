import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Movie } from '../../model/movie.model';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent  implements OnInit, OnChanges {

  @Input()
  movie!: Movie;
  edit: boolean = false;



  constructor(
    private router: ActivatedRoute,

  ) { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
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

    this.edit = !this.edit;
  }

}
