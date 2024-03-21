import { Component } from '@angular/core';
import { CinemaService } from './cinema/services/cinema.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private srv: CinemaService
  ) {
    this.srv.initStorageApp();
  }
}
