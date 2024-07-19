import { createSelector } from "@ngrx/store";
import { AppState } from "../reducers/app.reducer";
import { UserState } from "../reducers/user.reducer";

export const selectUserState = (state: AppState) => state.users;

export const selectUsers = createSelector(
  selectUserState,
  (userState: UserState) => {
    return userState.users;
  },
);

export const selectSelectedUser = createSelector(
  selectUserState,
  (userState: UserState) => {
    return userState.selectedUser;
  },
);

export const selectPageNumber = createSelector(
  selectUserState,
  (userState: UserState) => {
    return userState.nextPageNumber;
  },
);

export const selectHasMoreData = createSelector(
  selectUserState,
  (userState: UserState) => {
    return userState.hasMoreData;
  },
);
