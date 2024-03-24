import { Injectable, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Observable, from, of } from 'rxjs';
import { Movie } from '../model/movie.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../model/user.model';
import { StorageService } from './storage.service';


@Injectable({
  providedIn: 'root'
})
export class CinemaService implements OnInit{

  private api: string;
  loggedUser!: User;
  private originalMovies!: Movie[];

  constructor(
    private httpClient: HttpClient,
    private storageService: StorageService
  ) {
    this.api = environment.SERVER_API;

  }

  ngOnInit(): void {

  }

  init() {
    this.storageService.init().subscribe((res) => {
      this.httpClient.get(this.api).subscribe(res => this.storageService.set('movies', res));
    });
  }

   getMovies() {
    return from(this.storageService.get('movies').then((movies: Movie[]) => {
      if(!!movies && movies.length) {
        this.originalMovies = movies;
        movies.map((movie: Movie) => {
          this.loggedUser.movies.find((m: Movie) => {
            if(movie.id == m.id) {
              this.originalMovies.splice(this.originalMovies.findIndex((u: Movie) => u.id === movie.id), 1);
              this.originalMovies.unshift({
                ... movie,
                description: m.description,
                rate: m.rate
              });
            }
          });
        });

        return this.originalMovies;

      } else {
        this.originalMovies = movies;
        return this.originalMovies;
      }
    }));
  }

  public signUp(username: string, password: string) {
    return from(this.storageService.get('users')
      .then((users: any[]) => {
        if(!!!users) {
          this.storageService.set('users', []);
          users = [];
        }
        const exist = users.find((user: User) => {
          return user.username === username
        });

        if(!!!exist) {
          users.push({username: username, password: password, movies: []});
          this.storageService.set('users', users);
          return {
            success: true,
            message: 'User create successfuly.'
          }
        } else {
          return {
            success: false,
            message: 'user already exists'
          }
        }
      }));
  }

  login(username: string, password: string): Observable<any> {

    return from(this.storageService.get('users')
    .then((users: any[]) => {
      if(!!!users) {
        this.storageService.set('users', []);
        users = [];
      }
      const exist = users.find((user: User) => {
        return user.username === username
      });

      if(!!!exist) {
        return {
          success: false,
          message: 'Something went worng. Please verify the credentials.'
        }

      } else {
        if (exist.password !== password) {
          return {
            success: false,
            message: 'Incorrect username or password.'
          }
        }
        this.setLogguedUser(exist);
        return {
          success: true,
          message: 'User loggued successfuly.'
        }

      }
    }));
  }

  setLogguedUser(user: User) {
    this.loggedUser = user;
  }

  editMovie(movie: Movie) {
    let userPreferences: User[];
    this.storageService.get('users').then((users) => {
      const user: User = users.find((u:any) => {return u.username === this.loggedUser.username});
      const editMovie = user.movies.find((m) => { return m.id = movie.id });

      if (!!editMovie ) {
        user.movies.splice(user.movies.findIndex((m: Movie) => m.id === editMovie?.id),1);
        user.movies.unshift(movie);
      } else {

        user.movies.push(movie);
      }

      users.splice(users.findIndex((u: User) => u.username === user.username),1);
      users.unshift({username: user.username, password: user.password, movies: user.movies});
      userPreferences = users;
    }).then(() => this.storageService.set('users', userPreferences));


  }

}
