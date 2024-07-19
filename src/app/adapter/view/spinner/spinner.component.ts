import { CommonModule } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from "@angular/core";
import { I18NextModule } from "angular-i18next";

@Component({
  selector: "app-spinner",
  standalone: true,
  imports: [CommonModule, I18NextModule],
  templateUrl: "./spinner.component.html",
  styleUrl: "./spinner.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpinnerComponent {
  @Input() hasMoreData?: boolean;
  @Input() isMoreUsersLoading?: boolean;
  @Output() loadMoreUsersClicked = new EventEmitter();
  dots = Array(8).fill(0);

  loadMoreUsers() {
    this.loadMoreUsersClicked.emit();
  }
}
