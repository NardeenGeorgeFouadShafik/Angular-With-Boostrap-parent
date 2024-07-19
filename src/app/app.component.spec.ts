import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Store, StoreModule } from '@ngrx/store';
import { I18NextModule, I18NEXT_SERVICE, ITranslationService } from 'angular-i18next';
import { of } from 'rxjs';
import { UserHeaderComponent } from './adapter/view/user/user-header/user-header.component';
import { LOCAL_STORAGE_SERVICE } from './domain/outbound/local-storage.service';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './adapter/view/nav-bar/nav-bar.component';
import { DisplayErrorComponent } from './adapter/view/display-error/display-error.component';
import { DisplaySuccessComponent } from './adapter/view/display-success/display-success.component';
import { MessageService } from 'primeng/api';

describe('AppComponent', () => {
  let store: Store;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        I18NextModule.forRoot(),
        StoreModule.forRoot({}), // Provide an empty store for testing
        RouterModule.forRoot([]), // Import RouterModule for ActivatedRoute
        AppComponent, // Add standalone component here
        NavBarComponent, // Add standalone component here
        UserHeaderComponent, // Add standalone component here
        DisplayErrorComponent, // Add standalone component here
        DisplaySuccessComponent, // Add standalone component here
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
        {
          provide: LOCAL_STORAGE_SERVICE,
          useValue: {
            getItem: jasmine.createSpy('getItem').and.returnValue(null), // Mock getItem method
            setItem: jasmine.createSpy('setItem'), // Mock setItem method
            removeItem: jasmine.createSpy('removeItem'), // Mock removeItem method
            clear: jasmine.createSpy('clear') // Mock clear method
          }
        },
        {
          provide: MessageService,
          useValue: {
            add: jasmine.createSpy('add'),
            clear: jasmine.createSpy('clear'),
          },
        },
      ],
    }).compileComponents();

    store = TestBed.inject(Store);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
