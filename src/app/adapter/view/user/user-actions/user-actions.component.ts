import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from "@angular/core";
import { User } from "../../../../domain/models/user.model";
import { I18NextModule } from "angular-i18next";

@Component({
  selector: "app-user-actions",
  standalone: true,
  imports: [I18NextModule],
  templateUrl: "./user-actions.component.html",
  styleUrl: "./user-actions.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserActionsComponent {
  @Input() selectedUser?: Partial<User>;
  @Output() activeEditMode = new EventEmitter();
  @Output() closeUserAction = new EventEmitter();
  constructor() {}

  onEditClicked() {
    this.activeEditMode.emit();
  }
  closeUserActions() {
    this.closeUserAction.emit();
  }
}
