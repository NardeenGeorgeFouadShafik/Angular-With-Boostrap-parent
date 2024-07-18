import { createSelector } from "@ngrx/store";
import { AppState } from "../reducers/app.reducer";
import { ErrorState } from "../reducers/error.reducer";

export const selectErrorState = (state: AppState) => state.error;

export const selectError = createSelector(
  selectErrorState,
  (errorState: ErrorState) => {
    return errorState.errorMessage;
  },
);

export const selectErrorMessage = createSelector(
  selectErrorState,
  (errorState: ErrorState) => {
    return errorState.errorMessage;
  },
);
export const isErrorExist = createSelector(selectError, (errorMessage) => {
  return !!errorMessage && !!errorMessage;
});
