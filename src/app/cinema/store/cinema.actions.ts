import { createAction, props } from "@ngrx/store";
import { User } from "../model/user.model";

export const register = createAction('[Register]' , props<{userRegister: User}>());
export const registerSuccess = createAction('[Register Success]' );
export const registerError = createAction('[Register Error]' , props<{error: any}>());
