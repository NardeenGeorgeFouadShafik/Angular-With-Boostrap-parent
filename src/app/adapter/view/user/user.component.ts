import { Component } from '@angular/core';
import { UserHeaderComponent } from './user-header/user-header.component';
import { UserListComponent } from './user-list/user-list.component';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../../../domain/models/user.model';
import { AppState } from '../../../domain/store/reducers/app.reducer';
import { addUser, deleteUser, loadUsers, selectUser, setUserDialogMode, updateUser } from '../../../domain/store/actions/user.actions';
import { selectSelectedUser, selectUsers } from '../../../domain/store/selectors/user.selectors';
import { CommonModule } from '@angular/common';
import { UserModelComponent } from './user-model/user-model.component';
import { UserActionsComponent } from './user-actions/user-actions.component';
import { DeleteConfirmationComponent } from "../delete-confirmation/delete-confirmation.component";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, UserHeaderComponent, UserListComponent, UserModelComponent, UserActionsComponent, DeleteConfirmationComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
   users$?: Observable<Partial<User>[] | undefined>;
   selectedUser$?: Observable<Partial<User> | undefined>;

  constructor(private store: Store<AppState>) {
  }

    ngOnInit(): void {
    this.store.dispatch(loadUsers());
      this.users$ = this.store.select(selectUsers)
      this.selectedUser$ = this.store.select(selectSelectedUser);
    }
  
  onSubmitUser(user: Partial<User>) {
    if (!user.id) {
      this.store.dispatch(addUser(user))
    }
    else {
      this.store.dispatch(updateUser(user))
    }
    this.store.dispatch(setUserDialogMode(false))
  }

  onSelectUser(user: Partial<User>) {
    this.store.dispatch(selectUser(user))
  }

  onEditUser() {
    this.store.dispatch(setUserDialogMode(true))
  }
  deleteUser(user: Partial<User>) {
    //confirmation
    this.store.dispatch(deleteUser(user.id))
  }
}
