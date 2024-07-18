import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { environment } from "../../../../environments/environment";
import { authFeatureKey, authReducer, AuthState } from "./auth.reducer";
import { errorFeatureKey, ErrorReducer, ErrorState } from "./error.reducer";
import { UserState, userFeatureKey, userReducer } from "./user.reducer";
import {
  successFeatureKey,
  successReducer,
  SuccessState,
} from "./success.reducer";
import {
  pendingFeatureKey,
  pendingReducer,
  PendingState,
} from "./pending.reducer";

export interface AppState {
  [authFeatureKey]: AuthState;
  [errorFeatureKey]: ErrorState;
  [userFeatureKey]: UserState;
  [successFeatureKey]: SuccessState;
  [pendingFeatureKey]: PendingState;
}

export const reducers: ActionReducerMap<AppState> = {
  [authFeatureKey]: authReducer,
  [userFeatureKey]: userReducer,
  [errorFeatureKey]: ErrorReducer,
  [successFeatureKey]: successReducer,
  [pendingFeatureKey]: pendingReducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];
