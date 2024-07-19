import { Inject, Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from "@angular/common/http";
import { Observable, of, switchMap, take } from "rxjs";
import { environment } from "../../../environments/environment";
import {
  LOCAL_STORAGE_SERVICE,
  LocalStorageService,
} from "../../domain/outbound/local-storage.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    @Inject(LOCAL_STORAGE_SERVICE)
    private localStorageService: LocalStorageService,
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    if (request.url.startsWith(environment.backendUrl)) {
      //act as real token
      return of(this.localStorageService.getItem("token")).pipe(
        switchMap((token) => {
          if (token) {
            request = request.clone({
              setHeaders: {
                Authorization: `${token}`,
              },
            });
          }
          return next.handle(request);
        }),
      );
    }
    return next.handle(request);
  }
}
