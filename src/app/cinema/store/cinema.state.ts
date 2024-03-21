import { Movie } from "../model/movie.model";

export class CinemaState {
  isRegistering!: boolean;
  isRegistered!: boolean ;
  movies!: Movie[];
  error: any;
}
