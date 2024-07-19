import { ComponentFixture, TestBed } from "@angular/core/testing";

import { NavBarComponent } from "./nav-bar.component";
import { Store, StoreModule } from "@ngrx/store";
import { I18NextModule, I18NEXT_SERVICE, ITranslationService } from "angular-i18next";
import { of } from "rxjs";
import { UserHeaderComponent } from "../user/user-header/user-header.component";
import { CommonModule } from "@angular/common";
import { RouterModule, RouterOutlet } from "@angular/router";

describe("NavBarComponent", () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;

 let store: Store;

   beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        I18NextModule.forRoot(),
        StoreModule.forRoot({}),
        RouterModule.forRoot([]), // Import RouterModule for ActivatedRoute
        // Provide an empty store for testing
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
      fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
