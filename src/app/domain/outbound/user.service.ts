import { InjectionToken } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../models/user.model";

export const USER_SERVICE = new InjectionToken<string>("USER_SERVICE");

export interface UserService {
  getUsers(pageNumber: number): Observable<User[]>;
  createUser(user?: Partial<User>): Observable<Partial<User>>;
  getUser(id: number): Observable<User>;
  editUser(id: number, user: Partial<User>): Observable<Partial<User>>;
  deleteUser(id: number): Observable<void>;
}
