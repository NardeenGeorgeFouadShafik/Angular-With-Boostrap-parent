import {
  ApplicationConfig,
  ErrorHandler,
  importProvidersFrom,
  provideZoneChangeDetection,
} from "@angular/core";
import { provideRouter } from "@angular/router";

import { routes } from "./app.routes";
import { I18NextModule } from "angular-i18next";
import { I18N_PROVIDERS } from "./shared/internationalization/i18next-configuration";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withFetch,
} from "@angular/common/http";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { environment } from "../environments/environment";
import { AuthEffects } from "./domain/store/effects/auth.effects";
import { reducers, metaReducers } from "./domain/store/reducers/app.reducer";
import { UserEffects } from "./domain/store/effects/user.effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { GlobalErrorHandler } from "./shared/exception-handling/global-error.handler";
import { REST_SERVICES } from "./adapter/rest/rest-services";
import { ConfirmationService, MessageService } from "primeng/api";
import { DefaultLocalStorageService } from "./domain/services/default-local-storage.service";
import { LOCAL_STORAGE_SERVICE } from "./domain/outbound/local-storage.service";
import { AuthInterceptor } from "./shared/security/auth.interceptor";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(
      CommonModule,
      BrowserModule,
      BrowserAnimationsModule,
      ReactiveFormsModule,
      FormsModule,
      ReactiveFormsModule,
      I18NextModule.forRoot(),
      EffectsModule.forRoot([AuthEffects, UserEffects]),
      StoreModule.forRoot(reducers, {
        metaReducers,
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true,
          strictActionSerializability: true,
          strictStateSerializability: true,
        },
      }),
      StoreDevtoolsModule.instrument({
        maxAge: 25,
        logOnly: environment.production,
      }),
    ),
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    {
      provide: LOCAL_STORAGE_SERVICE,
      useClass: DefaultLocalStorageService,
    },
    ...I18N_PROVIDERS,
    ...REST_SERVICES,
    MessageService,
    ConfirmationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
};
