import { InjectionToken } from "@angular/core";
import { User } from "../models/user.model";
import { UserCredentail } from "../models/user-credential.model";
import { Token } from "../models/token.model";
import { Observable } from "rxjs";

export const AUTH_SERVICE = new InjectionToken<AuthService>("AUTH_SERVICE");

export interface AuthService {
  login(userCredentail: UserCredentail): Observable<Token>;
}
