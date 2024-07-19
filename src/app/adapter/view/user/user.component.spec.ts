import { ComponentFixture, TestBed } from "@angular/core/testing";

import { UserComponent } from "./user.component";
import { I18NextModule, I18NEXT_SERVICE, ITranslationService } from "angular-i18next";
import { UserHeaderComponent } from "./user-header/user-header.component";
import { StoreModule, Store } from "@ngrx/store";
import { of } from "rxjs";

describe("UserComponent", () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
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
      fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
