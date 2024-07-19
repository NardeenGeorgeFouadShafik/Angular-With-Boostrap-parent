import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { User } from "../../domain/models/user.model";
import { UserService } from "../../domain/outbound/user.service";

@Injectable()
export class RestUserService implements UserService {
  private static USERS_ENDPOINT_BASE_URL = environment.backendUrl + `api/users`;
  private static Get_USERS_ENDPOINT_BASE_URL = (pageNumber: number) =>
    RestUserService.USERS_ENDPOINT_BASE_URL + `?page=${pageNumber}`;

  constructor(private httpClient: HttpClient) {}
  createUser(user: Partial<User>): Observable<Partial<User>> {
    return this.httpClient.post<Partial<User>>(
      RestUserService.USERS_ENDPOINT_BASE_URL,
      {
        ...user,
      },
    );
  }
  getUsers(pageNumber: number): Observable<User[]> {
    return this.httpClient.get<User[]>(
      RestUserService.Get_USERS_ENDPOINT_BASE_URL(pageNumber),
    );
  }
  getUser(id: number): Observable<User> {
    return this.httpClient.get<User>(
      RestUserService.USERS_ENDPOINT_BASE_URL + id,
    );
  }
  editUser(id: number, user: Partial<User>): Observable<Partial<User>> {
    return this.httpClient.put<Partial<User>>(
      RestUserService.USERS_ENDPOINT_BASE_URL + id,
      { ...user },
    );
  }

  deleteUser(id: number): Observable<void> {
    return this.httpClient.delete<void>(
      RestUserService.USERS_ENDPOINT_BASE_URL + id,
    );
  }
}
