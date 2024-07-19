import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from "@angular/core";
import { Store } from "@ngrx/store";
import { MessageService } from "primeng/api";
import { ToastCloseEvent, ToastModule } from "primeng/toast";
import { Subscription, distinctUntilChanged, filter } from "rxjs";
import { AppState } from "../../../domain/store/reducers/app.reducer";
import {
  isErrorExist,
  selectErrorMessage,
} from "../../../domain/store/selectors/error.selectors";
import { clearError } from "../../../domain/store/actions/errors.actions";

@Component({
  selector: "app-display-error",
  standalone: true,
  imports: [ToastModule],
  templateUrl: "./display-error.component.html",
  styleUrl: "./display-error.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisplayErrorComponent implements OnInit, OnDestroy {
  errorMessageSubscription?: Subscription;

  constructor(
    private messageService: MessageService,
    private store: Store<AppState>,
  ) {}
  ngOnInit(): void {
    this.errorMessageSubscription = this.store
      .select(isErrorExist)
      .subscribe((isErrorExist) => {
        if (isErrorExist) {
          this.store
            .select(selectErrorMessage)
            .pipe(
              distinctUntilChanged(),
              filter(
                (errorMessage) => errorMessage !== "" && errorMessage !== " ",
              ),
            )
            .subscribe((errorMessage) => {
              if (errorMessage) {
                this.messageService.clear();
                this.messageService.add({
                  severity: "error",
                  summary: "Error",
                  detail: errorMessage,
                  sticky: true,
                });
              }
            });
        }
      });
  }

  onClose(event: ToastCloseEvent) {
    this.messageService.clear();
    this.store.dispatch(clearError());
  }
  ngOnDestroy(): void {
    this.errorMessageSubscription?.unsubscribe();
  }
}
