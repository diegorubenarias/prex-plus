import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rate-movie',
  templateUrl: './rate-movie.component.html',
  styleUrls: ['./rate-movie.component.scss'],
})
export class RateMovieComponent  implements OnInit {

  @Input()
  rate!: number;

  constructor() { }

  ngOnInit() {}

}
