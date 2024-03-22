import { Component } from '@angular/core';
import { CinemaService } from './cinema/services/cinema.service';
import { StorageService } from './cinema/services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private srv: StorageService
  ) {
    this.srv.init();
  }
}
