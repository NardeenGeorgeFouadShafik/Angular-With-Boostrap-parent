import { ComponentFixture, TestBed } from "@angular/core/testing";

import { UserCardComponent } from "./user-card.component";
import { I18NEXT_SERVICE, I18NextModule, ITranslationService } from "angular-i18next";
import { UserHeaderComponent } from "../user-header/user-header.component";

describe("UserCardComponent", () => {
  let component: UserCardComponent;
  let fixture: ComponentFixture<UserCardComponent>;

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

    fixture = TestBed.createComponent(UserCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
