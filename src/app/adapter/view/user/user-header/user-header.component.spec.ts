import { ComponentFixture, TestBed } from "@angular/core/testing";

import { UserHeaderComponent } from "./user-header.component";
import { I18NextModule, I18NEXT_SERVICE, ITranslationService } from "angular-i18next";

describe("UserHeaderComponent", () => {
  let component: UserHeaderComponent;
  let fixture: ComponentFixture<UserHeaderComponent>;

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

    fixture = TestBed.createComponent(UserHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
