import { ComponentFixture, TestBed } from "@angular/core/testing";

import { SpinnerComponent } from "./spinner.component";
import { I18NextModule, I18NEXT_SERVICE, ITranslationService } from "angular-i18next";
import { UserHeaderComponent } from "../user/user-header/user-header.component";

describe("SpinnerComponent", () => {
  let component: SpinnerComponent;
  let fixture: ComponentFixture<SpinnerComponent>;

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

    fixture = TestBed.createComponent(SpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
