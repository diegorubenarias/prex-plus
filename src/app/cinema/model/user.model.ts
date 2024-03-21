import { Movie } from "./movie.model";

export class User {
  username!: string;
  password!: string;
  movies: Movie[] = [];

  constructor(username: string, passWord: string) {
    this.username = username;
    this.password = passWord;
  }
}
