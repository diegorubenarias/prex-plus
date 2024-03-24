import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-rate-movie',
  templateUrl: './rate-movie.component.html',
  styleUrls: ['./rate-movie.component.scss'],
})
export class RateMovieComponent  implements OnInit, OnChanges {

  @Input()
  rate!: number;

  @Output()
  changeRate = new EventEmitter<number>();;


  hRate!: number;

  @Input()
  editRate!: boolean;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if(!!changes && changes['rate']) {
      this.hRate = changes['rate'].currentValue;
    }
  }

  ngOnInit() {}

  saveRate(index: any) {
    this.changeRate.emit(index + 1);
  }

  prepareRate(index: number) {
    this.hRate = index;
  }

  restoreRate(index: number) {

  }

}
