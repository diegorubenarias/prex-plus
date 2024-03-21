import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';
import { Movie } from '../model/movie.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../model/user.model';


@Injectable({
  providedIn: 'root'
})
export class CinemaService {

  private _storage: Storage | null = null;
  private api: string;
  private logo: string | null = null;
  private cinemaUser!: User;
  private originalMovies!: Movie[];

  constructor(
    private storage: Storage,
    private httpClient: HttpClient
  ) {
    this.api = environment.SERVER_API;
  }

  init() {
    return this.storage.create();
  }

  public set(key: string, value: any) {
    this._storage?.set(key, value);
  }

  public get(key: string) {
    return this._storage?.get(key);
  }

  initStorageApp() {
    this.init().then(storage => {
      this._storage = this.storage;

    }).then( () =>
      this.prepareLogo()
    ).then(() => {
      this.getMovies().subscribe(res => this.set('movies', res));
    });
  }

  getMovies(): Observable<any> {
    return this.httpClient.get(this.api);
  }

  prepareLogo() {
    this.storage.get('logo').then(logo => {
      if (!!logo) {
        this.logo = logo;
      } else {
        this.storage.set('logo', '/assets/images/logo.png');
      }
    })
  }

  getLogo() {
    return this.logo;
  }

  public signUp(username: string, password: string) {
    this.storage.get('users')
      .then((users: any[]) => {
        this.storage.set('users', users.push(new User(username, password)));

      })
  }
}
