import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { DisplayErrorComponent } from './adapter/view/display-error/display-error.component';
import { DisplaySuccessComponent } from './adapter/view/display-success/display-success.component';
import { Store } from '@ngrx/store';
import { AppState } from './domain/store/reducers/app.reducer';
import { isUserLoggedIn } from './domain/store/selectors/auth.selectors';
import { filter, withLatestFrom } from 'rxjs';
import { NavBarComponent } from './adapter/view/nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    DisplayErrorComponent,
    DisplaySuccessComponent,
    NavBarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'Angular-With-Bootstrap-parent';
  constructor(  private store: Store<AppState>,
    private router: Router){}
  ngOnInit(): void {
  this.store
      .select(isUserLoggedIn)
      .pipe(
        filter((isUserLoggedIn) => isUserLoggedIn!),
        withLatestFrom(
          this.router.events.pipe(
            filter((event) => event instanceof NavigationEnd),
          ),
        ),
      )
      .subscribe(([isUserLoggedIn, event]) => {
       
          if (
            (event as NavigationEnd).url === '/login' 
          ) {
              this.router.navigate(['/users']);
            }
        
      });  }
}
