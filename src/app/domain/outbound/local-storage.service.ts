import { InjectionToken } from "@angular/core";

export const LOCAL_STORAGE_SERVICE = new InjectionToken<LocalStorageService>(
  "LOCAL_STORAGE_SERVICE",
);

export interface LocalStorageService {
  setItem(key: string, value: any): void;

  getItem(key: string): string;

  removeItem(key: string): void;

  clear(): void;
}
