import { createSelector } from "@ngrx/store";
import {
  AuthActionNamesEnum,
  UserActionNamesEnum,
} from "../actions/action-names.enum";
import { AppState } from "../reducers/app.reducer";
import { PendingState } from "../reducers/pending.reducer";

export const selectAuthState = (state: AppState) => state.pending;

export const selectPendingQueries = createSelector(
  selectAuthState,
  (pending: PendingState) => {
    return pending.pendingActions;
  },
);

export const isUsersLoading = createSelector(
  selectPendingQueries,
  (pendingQueries: string[]) => {
    return pendingQueries.some(
      (query) => query === UserActionNamesEnum.LOAD_USERS,
    );
  },
);

export const isMoreUsersLoading = createSelector(
  selectPendingQueries,
  (pendingQueries: string[]) => {
    return pendingQueries.some(
      (query) => query === UserActionNamesEnum.LOAD_MORE_USERS,
    );
  },
);
export const isUserLoading = createSelector(
  selectPendingQueries,
  (pendingQueries: string[]) => {
    return pendingQueries.some(
      (query) => query === UserActionNamesEnum.LOAD_USER,
    );
  },
);

export const isUserAdding = createSelector(
  selectPendingQueries,
  (pendingQueries: string[]) => {
    return pendingQueries.some(
      (query) => query === UserActionNamesEnum.ADD_USER,
    );
  },
);

export const isUserUpdating = createSelector(
  selectPendingQueries,
  (pendingQueries: string[]) => {
    return pendingQueries.some(
      (query) => query === UserActionNamesEnum.UPDATE_USER,
    );
  },
);

export const isUserDeleting = createSelector(
  selectPendingQueries,
  (pendingQueries: string[]) => {
    return pendingQueries.some(
      (query) => query === UserActionNamesEnum.DELETE_USER,
    );
  },
);
