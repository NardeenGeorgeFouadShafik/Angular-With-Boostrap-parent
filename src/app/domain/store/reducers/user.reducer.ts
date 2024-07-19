import { createReducer, on } from "@ngrx/store";
import { UserActions } from "../actions/action-types";
import { User } from "../../models/user.model";

export const userFeatureKey = "users";

export interface UserState {
  users: Partial<User>[];
  selectedUser?: Partial<User>;
  isEditUserDialogMode: boolean;
  nextPageNumber: number;
  hasMoreData: boolean;
}

export const initialState: UserState = {
  users: [],
  selectedUser: undefined,
  isEditUserDialogMode: false,
  nextPageNumber: 1,
  hasMoreData: true,
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.usersLoaded, (state, action) => {
    return {
      ...state,
      users: [...action.users],
      nextPageNumber: state.nextPageNumber + 1,
      hasMoreData: action.users.length === 0 ? false : true,
    };
  }),
  on(UserActions.moreUsersLoaded, (state, action) => {
    return {
      ...state,
      users: !state.hasMoreData
        ? [...state.users]
        : [...state.users, ...action.users],
      nextPageNumber: !state.hasMoreData
        ? state.nextPageNumber
        : state.nextPageNumber + 1,
      hasMoreData: action.users.length === 0 ? false : true,
    };
  }),
  on(UserActions.userAdded, (state, action) => {
    const nameArr = action.user?.name?.split(/ (.*)/);

    return {
      ...state,
      users: [
        ...(state.users || []),
        {
          ...action.user,
          first_name: nameArr?.[0],
          last_name: nameArr?.[1],
        },
      ],
    };
  }),
  on(UserActions.userDeleted, (state, action) => {
    return {
      ...state,
      users: [
        ...(state.users?.filter((user) => user.id !== action.userId) ?? []),
      ],
    };
  }),

  on(UserActions.userUpdated, (state, action) => {
    const index = state?.users?.findIndex((user) => {
      return user.id === state.selectedUser?.id;
    });
    const updatedUser = {
      ...state.users[index],
      ...action.user,
    };
    const updatedUsers = [...state.users];
    updatedUsers[index] = updatedUser;
    return {
      ...state,
      users: updatedUsers,
      selectedUser: undefined,
    };
  }),

  on(UserActions.selectUser, (state, action) => {
    const isSameUser = state.selectedUser?.id === action.user?.id;
    return {
      ...state,
      selectedUser: isSameUser ? undefined : action.user,
    };
  }),
  on(UserActions.setUserDialogMode, (state, action) => {
    return {
      ...state,
      isEditUserDialogMode: action.isEditUserDialogMode,
    };
  }),
);
