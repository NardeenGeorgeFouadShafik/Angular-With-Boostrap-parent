import { createAction, props } from "@ngrx/store";

export const setError = createAction(
  "[Error Handler] Set Error Message",
  props<{ errorMessage: string }>(),
);
export const clearError = createAction("[Error Dialog] Clear Error Message");
