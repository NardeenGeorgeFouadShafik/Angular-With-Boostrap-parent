import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from "@angular/core";
import { User } from "../../../domain/models/user.model";

@Component({
  selector: "app-delete-confirmation",
  standalone: true,
  imports: [],
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
