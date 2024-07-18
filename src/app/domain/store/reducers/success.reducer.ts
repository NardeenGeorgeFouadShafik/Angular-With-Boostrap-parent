import { createReducer, on } from "@ngrx/store";
import { allActionTypes, SuccessActions } from "../actions/action-types";

export const successFeatureKey = "success";

export interface SuccessState {
  successKey?: string;
}

export const initialState: SuccessState = {
  successKey: undefined,
};

export const successReducer = createReducer(
  initialState,
  on(...allActionTypes, (state: SuccessState, action: any) => {
    let successKey: string = action.success;
    let newState = { ...state };
    if (!!successKey) {
      newState = {
        ...state,
        successKey,
      };
    }
    return newState;
  }),
  on(SuccessActions.clearSuccessKey, (state, action) => {
    return {
      successKey: undefined,
    };
  }),
);
