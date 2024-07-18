import * as AuthActions from "./auth.actions";
import * as ErrorActions from "./errors.actions";
import * as UserActions from "./user.actions";
import * as SuccessActions from "./success.actions";

export { AuthActions, ErrorActions, UserActions, SuccessActions };

const actionTypes = {
  ...AuthActions,
  ...UserActions,
  ...ErrorActions,
  ...SuccessActions,
};

export const allActionTypes = Object.values(actionTypes);
