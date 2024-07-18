import {
  ErrorHandler,
  Inject,
  Injectable,
  Injector,
  NgZone,
} from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { I18NextPipe } from "angular-i18next";
import { AppState } from "../../domain/store/reducers/app.reducer";
import { setError } from "../../domain/store/actions/errors.actions";
import { HttpErrorResponse } from "@angular/common/http";

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  private store?: Store<AppState>;

  constructor(
    private injector: Injector,
    private i18nextPipe: I18NextPipe,
  ) {}

  handleError(error: any): void {
    console.log(error);
    this.store = this.injector.get(Store<AppState>);
    this.handleGeneralError(error);
  }

  handleGeneralError(httperror: HttpErrorResponse) {
    const message = httperror.error.error;
    this.dispatchError(message);
  }

  dispatchError(errorMessage: string) {
    this.store?.dispatch(setError({ errorMessage }));
  }
}
