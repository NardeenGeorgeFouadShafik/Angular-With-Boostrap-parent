import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from "@angular/core";
import { User } from "../../../domain/models/user.model";
import { I18NextModule } from "angular-i18next";

@Component({
  selector: "app-delete-confirmation",
  standalone: true,
  imports: [I18NextModule],
  templateUrl: "./delete-confirmation.component.html",
  styleUrl: "./delete-confirmation.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeleteConfirmationComponent {
  @Input() selectedUser?: Partial<User>;
  @Output() deleteUserClicked = new EventEmitter<Partial<User>>();
  constructor() {}
  onDeleteClicked() {
    this.deleteUserClicked.emit(this.selectedUser!);
  }
}
