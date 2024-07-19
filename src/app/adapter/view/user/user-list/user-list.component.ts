import { CommonModule } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from "@angular/core";
import { UserCardComponent } from "../user-card/user-card.component";
import { SpinnerComponent } from "../../spinner/spinner.component";
import { User } from "../../../../domain/models/user.model";
import { UserActionsComponent } from "../user-actions/user-actions.component";

@Component({
  selector: "app-user-list",
  standalone: true,
  imports: [
    CommonModule,
    UserCardComponent,
    SpinnerComponent,
    UserActionsComponent,
  ],
  templateUrl: "./user-list.component.html",
  styleUrl: "./user-list.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListComponent {
  @Input() users?: Partial<User>[];
  @Input() selectedUser?: Partial<User>;
  @Output() selectUser = new EventEmitter<Partial<User>>();
  @Input() hasMoreData?: boolean;
  @Input() isMoreUsersLoading?: boolean;
  @Output() loadMoreUsersClicked = new EventEmitter();

  constructor() {}
  onSelectUser(user: Partial<User>) {
    this.selectUser.emit(user);
  }
  loadMoreUsers() {
    this.loadMoreUsersClicked.emit();
  }
}
