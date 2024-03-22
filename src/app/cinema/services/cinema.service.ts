import { Injectable, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Observable, of } from 'rxjs';
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
  private loggedUser!: User;
  private originalMovies!: Movie[];

  constructor(
    private httpClient: HttpClient,
    private storageService: StorageService
  ) {
    this.api = environment.SERVER_API;

  }

  ngOnInit(): void {
    this.httpClient.get(this.api).subscribe(res => this.storageService.set('movies', res));
  }



  async getMovies() {
    return await this.storageService.get('movies').then((movies: Movie[]) => {
      if(!!movies && movies.length) {
        return movies;
      } else {
        this.originalMovies = movies;
        return this.originalMovies;
      }
    });
  }

  public async signUp(username: string, password: string) {
    return this.storageService.get('users')
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
      });
  }

  async login(username: string, password: string) {
    return this.storageService.get('users')
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
        this.loggedUser = exist;

        return {
          success: true,
          message: 'User loggued successfuly.'
        }

      }
    });
  }

}
