import { createReducer, on } from "@ngrx/store";
import { ErrorActions } from "../actions/action-types";

export const errorFeatureKey = "error";

export interface ErrorState {
  errorMessage?: string;
}

export const initialState: ErrorState = {
  errorMessage: undefined,
};

export const ErrorReducer = createReducer(
  initialState,
  on(ErrorActions.setError, (state, action) => {
    return {
      errorMessage: action.errorMessage,
    };
  }),
  on(ErrorActions.clearError, (state, action) => {
    return {
      errorMessage: undefined,
    };
  }),
);
