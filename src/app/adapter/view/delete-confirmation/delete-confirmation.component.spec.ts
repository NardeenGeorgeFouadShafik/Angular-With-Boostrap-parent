import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DeleteConfirmationComponent } from "./delete-confirmation.component";
import { I18NEXT_SERVICE, I18NextModule, ITranslationService } from "angular-i18next";
import { UserHeaderComponent } from "../user/user-header/user-header.component";

describe("DeleteConfirmationComponent", () => {
  let component: DeleteConfirmationComponent;
  let fixture: ComponentFixture<DeleteConfirmationComponent>;

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

    fixture = TestBed.createComponent(DeleteConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
