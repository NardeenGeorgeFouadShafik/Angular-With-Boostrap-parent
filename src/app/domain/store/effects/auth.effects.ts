import { Inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { map, of, switchMap } from "rxjs";
import { AUTH_SERVICE, AuthService } from "../../outbound/auth.service";

import { AuthActions } from "../actions/action-types";
import { userlogggedin } from "../actions/auth.actions";
import { AppState } from "../reducers/app.reducer";
import {
  LOCAL_STORAGE_SERVICE,
  LocalStorageService,
} from "../../outbound/local-storage.service";

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loginUser),
      switchMap((action) => {
        return this.authService.login(action.userCredentail);
      }),
      map((token) => {
        this.localStorageService.setItem("token", token.token);
        return userlogggedin();
      }),
    ),
  );

  constructor(
    private actions$: Actions,
    @Inject(AUTH_SERVICE)
    private authService: AuthService,
    @Inject(LOCAL_STORAGE_SERVICE)
    private localStorageService: LocalStorageService,
    private store: Store<AppState>,
  ) {}
}
