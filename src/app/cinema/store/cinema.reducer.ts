import { createReducer, on } from "@ngrx/store";
import { CinemaState } from "./cinema.state";
import { CinemaInitialState } from "./cinema.initialState.state";
import { register, registerError, registerSuccess } from "./cinema.actions";

const initialState: CinemaState =  CinemaInitialState;

const reducer = createReducer(initialState,
    on(register, state => {
        return {
          ... state,
          error: null,
          isRegistered: false,
          isRegistering: true,
        }
    }),
    on(registerSuccess, state => {
      return {
        ... state,
        error: null,
        isRegistered: true,
        isRegistering: false
      }
    }),
    on(registerError, (state, action) => {
      return {
        ...state,
        error: action.error,
        isRegistered: false,
        isRegistering: false
      }
    })
  );

export function cinemaReducer(state: CinemaState, action: any) {
  return reducer(state, action);
}
