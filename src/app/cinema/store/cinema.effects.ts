import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { register } from "./cinema.actions";
import { map } from "rxjs";
import { CinemaService } from "../services/cinema.service";

@Injectable()
export class CinemaEffects {

  /*register$ = createEffect(() => this.actions$.pipe(
    ofType(register),
    map((user) => this.cinemaService.signUp(user.username, user.password)
      .pipe(
        map(movies => ({ type: '[Movies API] Movies Loaded Success', payload: movies })),
        catchError(() => EMPTY)
      ))
    )
  );*/

  constructor(
    private actions$: Actions,
    private cinemaService: CinemaService
  ) {}
}
