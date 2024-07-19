import { ComponentFixture, TestBed } from "@angular/core/testing";

import { UserActionsComponent } from "./user-actions.component";
import { I18NextModule, I18NEXT_SERVICE, ITranslationService } from "angular-i18next";
import { UserHeaderComponent } from "../user-header/user-header.component";

describe("UserActionsComponent", () => {
  let component: UserActionsComponent;
  let fixture: ComponentFixture<UserActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserHeaderComponent, I18NextModule.forRoot()],
      providers: [
        {
          provide: I18NEXT_SERVICE,
          useValue: {
            t: (key: string) => key, // Mock translation function
            // Add other methods if used in your component
          } as ITranslationService,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(UserActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
