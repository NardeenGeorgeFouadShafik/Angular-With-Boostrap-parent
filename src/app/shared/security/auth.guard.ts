import { inject } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from "@angular/router";
import { Store } from "@ngrx/store";
import { filter, map, tap } from "rxjs";
import { isUserLoggedIn } from "../../domain/store/selectors/auth.selectors";
import { AppState } from "../../domain/store/reducers/app.reducer";
import { LOCAL_STORAGE_SERVICE } from "../../domain/outbound/local-storage.service";

export const AuthGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  const store = inject(Store<AppState>);
  const router = inject(Router);
  const localStorageService = inject(LOCAL_STORAGE_SERVICE);

  const token = localStorageService.getItem("token");
  return store.select(isUserLoggedIn).pipe(
    filter((isUserLoggedIn) => isUserLoggedIn !== undefined),
    map((isUserLoggedIn) => {
      if (!isUserLoggedIn) {
        router.navigate(["/login"]);
      }
      return isUserLoggedIn!;
    }),
  );
};
