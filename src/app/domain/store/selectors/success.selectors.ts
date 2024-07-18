import { createSelector } from "@ngrx/store";
import { AppState } from "../reducers/app.reducer";
import { SuccessState } from "../reducers/success.reducer";

export const selectSuccessState = (state: AppState) => state.success;

export const selectSuccessKey = createSelector(
  selectSuccessState,
  (successState: SuccessState) => {
    return successState.successKey;
  },
);
