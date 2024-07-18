import { createReducer, on } from "@ngrx/store";
import { AuthActions } from "../actions/action-types";

export const authFeatureKey = "auth";

export interface AuthState {
  loggedIn?: boolean;
}

export const initialState: AuthState = {
  loggedIn: false,
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.userlogggedin, (state, action) => {
    return {
      ...state,
      loggedIn: true,
    };
  }),
);
