import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavBarComponent } from '../../nav-bar/nav-bar.component';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, NavBarComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
 users = [
    { name: 'Vladimir Usov', image: 'assets/vladimir.jpg' },
    { name: 'Hugo Assunção', image: 'assets/hugo.jpg' },
    { name: 'Elwin Sharvill', image: 'assets/elwin.jpg' },
    { name: 'Kevin Noboa', image: 'assets/kevin.jpg' },
    { name: 'Mónica Ribeiro', image: 'assets/monica.jpg' }
  ];
}
