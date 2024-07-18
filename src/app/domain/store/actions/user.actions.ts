import { createAction, props } from "@ngrx/store";
import { UserActionNamesEnum, PrefixEnum } from "./action-names.enum";
import { User } from "../../models/user.model";

export const loadUsers = createAction(
  "[User List Page] Load Users",
  (
    pending: string = `${PrefixEnum.BEGIN}_${UserActionNamesEnum.LOAD_USERS}`,
  ) => ({
    pending,
  }),
);
export const usersLoaded = createAction(
  "[Load Users Effect] Users Loaded",
  (
    users: User[],
    pending: string = `${PrefixEnum.END}_${UserActionNamesEnum.LOAD_USERS}`,
  ) => ({
    users,
    pending,
  }),
);

export const loadUser = createAction(
  "[User List Page] Load User ",
  (
    userId: number | undefined,
    pending: string = `${PrefixEnum.BEGIN}_${UserActionNamesEnum.LOAD_USER}`,
  ) => ({ userId, pending }),
);

export const userLoaded = createAction(
  "[Load User Effect] User Loaded",
  (
    user: User,
    pending: string = `${PrefixEnum.END}_${UserActionNamesEnum.LOAD_USER}`,
  ) => ({
    user,
    pending,
  }),
);

export const addUser = createAction(
  "[User Page] Add User",
  (
    user: Partial<User>,
    pending: string = `${PrefixEnum.BEGIN}_${UserActionNamesEnum.ADD_USER}`,
  ) => ({ user, pending }),
);

export const userAdded = createAction(
  "[Add User Effect] User Added",
  (
    user: Partial<User>,
    pending: string = `${PrefixEnum.END}_${UserActionNamesEnum.ADD_USER}`,
    success: string = `${UserActionNamesEnum.ADD_USER}`,
  ) => ({ user, pending, success }),
);

export const updateUser = createAction(
  "[User Page] Update User",
  (
    user: Partial<User>,
    pending: string = `${PrefixEnum.BEGIN}_${UserActionNamesEnum.UPDATE_USER}`,
  ) => ({ user, pending }),
);

export const userUpdated = createAction(
  "[Update User Effect] User Updated",
  (
    user: Partial<User>,
    pending: string = `${PrefixEnum.END}_${UserActionNamesEnum.UPDATE_USER}`,
    success: string = `${UserActionNamesEnum.UPDATE_USER}`,
  ) => ({ user, pending, success }),
);

export const deleteUser = createAction(
  "[User Page] Delete User ",
  (
    userId: number | undefined,
    pending: string = `${PrefixEnum.BEGIN}_${UserActionNamesEnum.DELETE_USER}`,
  ) => ({ userId, pending }),
);

export const userDeleted = createAction(
  "[Delete User Effect] User Deleted",
  (
    userId: number | undefined,
    pending: string = `${PrefixEnum.END}_${UserActionNamesEnum.DELETE_USER}`,
    success: string = `${UserActionNamesEnum.DELETE_USER}`,
  ) => ({
    userId,
    pending,
    success,
  }),
);
export const selectUser = createAction(
  "[User Page] Select User",
  (user: Partial<User>) => ({ user }),
);
export const setUserDialogMode = createAction(
  "[User page] Set User Dialog Mode",
  (
    isEditUserDialogMode: boolean,
  ) => ({ isEditUserDialogMode }),
);