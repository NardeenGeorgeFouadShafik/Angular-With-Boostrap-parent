import { CommonModule } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  output,
} from "@angular/core";
import { User } from "../../../../domain/models/user.model";

@Component({
  selector: "app-user-card",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./user-card.component.html",
  styleUrl: "./user-card.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCardComponent {
  @Input() user?: Partial<User>;
  @Output() selectUser = new EventEmitter();
  @Input() selectedUser?: Partial<User>;

  editUser(user: any) {
    // Implement edit user logic
  }

  deleteUser(user: any) {
    // Implement delete user logic
  }

  onRowClicked() {
    this.selectUser.emit(this.user);
  }
  isSelectedUser(): boolean {
    return this.user?.id === this.selectedUser?.id;
  }
}
