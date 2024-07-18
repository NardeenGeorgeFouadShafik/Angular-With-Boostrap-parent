import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { User } from "../../domain/models/user.model";
import { UserService } from "../../domain/outbound/user.service";
import { AuthService } from "../../domain/outbound/auth.service";
import { UserCredentail } from "../../domain/models/user-credential.model";
import { Token } from "../../domain/models/token.model";

@Injectable()
export class RestAuthService implements AuthService {
  private static AUTH_ENDPOINT_BASE_URL = environment.backendUrl + "api/login";

  constructor(private httpClient: HttpClient) {}
  login(userCredentail: UserCredentail): Observable<Token> {
    console.log(RestAuthService.AUTH_ENDPOINT_BASE_URL)
    const t = this.httpClient.post<Token>(RestAuthService.AUTH_ENDPOINT_BASE_URL, {
      ...userCredentail,
    });
    return t
  }
}
