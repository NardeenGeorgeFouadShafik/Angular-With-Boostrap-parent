import { ComponentFixture, TestBed } from "@angular/core/testing";

import { LoginComponent } from "./login.component";
import { I18NEXT_SERVICE, I18NextModule, ITranslationService } from "angular-i18next";
import { UserHeaderComponent } from "../../user/user-header/user-header.component";
import { Store, StoreModule } from "@ngrx/store";
import { of } from "rxjs";

describe("LoginComponent", () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

let store: Store;

   beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        UserHeaderComponent,
        I18NextModule.forRoot(),
        StoreModule.forRoot({}), // Provide an empty store for testing
      ],
      providers: [
        {
          provide: I18NEXT_SERVICE,
          useValue: {
            t: (key: string) => key, // Mock translation function
            // Add other methods if used in your component
          } as ITranslationService,
        },
        {
          provide: Store,
          useValue: {
            select: jasmine.createSpy().and.returnValue(of([])), // Mock select method
            dispatch: jasmine.createSpy(), // Mock dispatch method
          },
        },
      ],
    }).compileComponents();

     store = TestBed.inject(Store);
      fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
