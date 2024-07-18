import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { I18NextPipe } from 'angular-i18next';
import { MessageService } from 'primeng/api';
import { ToastCloseEvent, ToastModule } from 'primeng/toast';
import { Subscription } from 'rxjs';
import { clearSuccessKey } from '../../../domain/store/actions/success.actions';
import { AppState } from '../../../domain/store/reducers/app.reducer';
import { selectSuccessKey } from '../../../domain/store/selectors/success.selectors';

@Component({
  selector: 'app-display-success',
  standalone: true,
  imports: [ToastModule],
  templateUrl: './display-success.component.html',
  styleUrl: './display-success.component.scss',
  providers: [MessageService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisplaySuccessComponent {
  successMessageSubscription: Subscription;

  constructor(
    private messageService: MessageService,
    private store: Store<AppState>,
    private i18nextPipe: I18NextPipe,
  ) {
    this.successMessageSubscription = this.store
      .select(selectSuccessKey)
      .subscribe((successMessageKey) => {
        if (successMessageKey) {
          this.messageService.clear();
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: this.i18nextPipe.transform(
              'translation:successToast.' +
                successMessageKey +
                '.successMessage',
            ),
            sticky: true,
          });
        }
      });
  }

  onClose(event: ToastCloseEvent) {
    this.store.dispatch(clearSuccessKey());
  }
  ngOnDestroy(): void {
    this.successMessageSubscription.unsubscribe();
  }
}
