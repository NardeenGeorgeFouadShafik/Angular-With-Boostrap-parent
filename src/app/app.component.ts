import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from './adapter/view/user/user-list/user-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-angular-project';
}
