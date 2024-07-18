import { APP_INITIALIZER, LOCALE_ID } from "@angular/core";
import {
  defaultInterpolationFormat,
  I18NextModule,
  I18NEXT_SERVICE,
  ITranslationService,
} from "angular-i18next";

import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import { enError } from "./error/en.error";
import { enTranslation } from "./translation/en.translation";
import { enValidation } from "./validation/en.validation";

const I18NEXT_RESOURCES = {
  en: {
    error: enError,
    translation: enTranslation,
    validation: enValidation,
  },
};

export function appInit(i18next: ITranslationService) {
  return () =>
    i18next.use(I18nextBrowserLanguageDetector).init({
      supportedLngs: ["en"],
      fallbackLng: "en",
      debug: true,
      returnEmptyString: false,
      ns: ["translation", "validation", "error"],
      resources: I18NEXT_RESOURCES,
      cleanCode: true,
      interpolation: {
        format: I18NextModule.interpolationFormat(defaultInterpolationFormat),
        escapeValue: false,
      },
      detection: {
        lookupLocalStorage: "i18nextLanguage",
      },
    });
}

export function localeIdFactory(i18next: ITranslationService) {
  return i18next.language;
}

export const I18N_PROVIDERS = [
  {
    provide: APP_INITIALIZER,
    useFactory: appInit,
    deps: [I18NEXT_SERVICE],
    multi: true,
  },
  {
    provide: LOCALE_ID,
    deps: [I18NEXT_SERVICE],
    useFactory: localeIdFactory,
  },
];
