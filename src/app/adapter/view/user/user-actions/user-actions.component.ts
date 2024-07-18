import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../../../domain/models/user.model';

@Component({
  selector: 'app-user-actions',
  standalone: true,
  imports: [],
  templateUrl: './user-actions.component.html',
  styleUrl: './user-actions.component.scss'
})
export class UserActionsComponent {

  @Input() selectedUser?: Partial<User>;
  @Output() activeEditMode = new EventEmitter();

  constructor() { }

  onEditClicked() {
    this.activeEditMode.emit();
  }

 
}
