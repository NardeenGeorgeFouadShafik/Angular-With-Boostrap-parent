import { Inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { delay, map, switchMap, withLatestFrom } from "rxjs";
import { User } from "../../models/user.model";
import { USER_SERVICE, UserService } from "../../outbound/user.service";
import { UserActions } from "../actions/action-types";
import {
  userDeleted,
  userLoaded,
  userUpdated,
  userAdded,
  usersLoaded,
  moreUsersLoaded,
} from "../actions/user.actions";
import { AppState } from "../reducers/app.reducer";
import {
  selectPageNumber,
  selectSelectedUser,
} from "../selectors/user.selectors";
import {
  LOCAL_STORAGE_SERVICE,
  LocalStorageService,
} from "../../outbound/local-storage.service";

@Injectable()
export class UserEffects {
  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUser),
      switchMap((action) => {
        return this.userService.getUser(action.userId || 0);
      }),
      map((user) => {
        return userLoaded(user);
      }),
    ),
  );
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUsers),
      withLatestFrom(this.store.select(selectPageNumber)),
      switchMap(([action, pageNumber]) => {
        //delay just to act as real server and see the spinner
        return this.userService.getUsers(pageNumber).pipe(delay(3000));
      }),
      map((users: any) => {
        return usersLoaded(users.data);
      }),
    ),
  );
  loadMoreUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadMoreUsers),
      withLatestFrom(this.store.select(selectPageNumber)),
      switchMap(([action, pageNumber]) => {
        //delay just to act as real server and see the spinner
        return this.userService.getUsers(pageNumber).pipe(delay(3000));
      }),
      map((users: any) => {
        return moreUsersLoaded(users.data);
      }),
    ),
  );
  addUserWithAdmin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.addUser),
      switchMap((action) => {
        return this.userService.createUser({
          ...action.user,
        });
      }),
      map((user) => {
        return userAdded(user);
      }),
    ),
  );

  editUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.updateUser),
      withLatestFrom(this.store.select(selectSelectedUser)),
      switchMap(([action, selectedUser]) => {
        return this.userService
          .editUser(selectedUser?.id || 0, {
            ...action.user,
          })
          .pipe(
            map((user: Partial<User>) => {
              return [user, selectedUser];
            }),
          );
      }),
      map(([user, selectedUser]) => {
        const nameArr = user?.name?.split(/ (.*)/);
        return userUpdated({
          ...selectedUser,
          ...user!,
          first_name: nameArr?.[0],
          last_name: nameArr?.[1],
        });
      }),
    ),
  );

  deleteUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.deleteUser),
      switchMap((action) => {
        return this.userService.deleteUser(action.userId || 0).pipe(
          map(() => {
            return userDeleted(action.userId || 0);
          }),
        );
      }),
    ),
  );
  constructor(
    private actions$: Actions,
    @Inject(USER_SERVICE)
    private userService: UserService,
    private store: Store<AppState>,
  ) {}
}
