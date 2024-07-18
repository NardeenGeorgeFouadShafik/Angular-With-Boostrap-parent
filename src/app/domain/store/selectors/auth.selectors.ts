import { createSelector } from "@ngrx/store";
import { AppState } from "../reducers/app.reducer";
import { AuthState } from "../reducers/auth.reducer";

export const selectAuthState = (state: AppState) => state.auth;

export const isUserLoggedIn = createSelector(
  selectAuthState,
  (auth: AuthState) => {
    return auth.loggedIn;
  },
);
