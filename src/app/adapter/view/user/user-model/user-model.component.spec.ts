import { ComponentFixture, TestBed } from "@angular/core/testing";

import { UserModelComponent } from "./user-model.component";
import { I18NextModule, I18NEXT_SERVICE, ITranslationService } from "angular-i18next";
import { UserHeaderComponent } from "../user-header/user-header.component";

describe("UserModelComponent", () => {
  let component: UserModelComponent;
  let fixture: ComponentFixture<UserModelComponent>;

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
    fixture = TestBed.createComponent(UserModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
