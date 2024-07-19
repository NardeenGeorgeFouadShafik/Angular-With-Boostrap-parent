import { createAction } from "@ngrx/store";
import { User } from "../../models/user.model";
import { AuthActionNamesEnum, PrefixEnum } from "./action-names.enum";
import { UserCredentail } from "../../models/user-credential.model";

export const loginUser = createAction(
  "[Login Page] Login User",
  (
    userCredentail: UserCredentail,
    pending: string = `${PrefixEnum.BEGIN}_${AuthActionNamesEnum.LOG_IN_USER}`,
  ) => ({ userCredentail, pending }),
);
export const userlogggedin = createAction(
  "[Login Useer Effect] User Loggedin",
  (
    pending: string = `${PrefixEnum.END}_${AuthActionNamesEnum.LOG_IN_USER}`,
    success: string = `${AuthActionNamesEnum.LOG_IN_USER}`,
  ) => ({ pending, success }),
);

export const userLoggedInChecked = createAction(
  "[App Component] Check LogedIn User",
  (isUserLoggedIn: boolean) => ({ isUserLoggedIn }),
);
