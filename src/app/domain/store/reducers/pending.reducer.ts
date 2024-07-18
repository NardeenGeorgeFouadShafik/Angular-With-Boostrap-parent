import { createReducer, on } from "@ngrx/store";
import { allActionTypes, ErrorActions } from "../actions/action-types";

export const pendingFeatureKey = "pending";

const BEGIN = "BEGIN";
const END = "END";
export interface PendingState {
  pendingActions: string[];
}

export const initialState: PendingState = {
  pendingActions: [],
};

export const pendingReducer = createReducer(
  initialState,
  on(...allActionTypes, (state: PendingState, action: any) => {
    let pendingAction: string = action.pending;
    let newState = { ...state };
    if (!!pendingAction) {
      if (pendingAction.startsWith(BEGIN)) {
        newState = {
          ...state,
          pendingActions: [
            ...state.pendingActions,
            pendingAction.split("_")[1],
          ],
        };
      } else if (pendingAction.startsWith(END)) {
        const newPendingActions = newState.pendingActions.filter(
          (query) => query !== pendingAction.split("_")[1],
        );
        newState = {
          ...state,
          pendingActions: [...newPendingActions],
        };
      }
    }
    return newState;
  }),
  on(ErrorActions.setError, (state: PendingState, action) => {
    return {
      pendingActions: [],
    };
  }),
);
