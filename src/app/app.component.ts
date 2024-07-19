import { Component, Inject, OnInit } from "@angular/core";
import { NavigationEnd, Router, RouterOutlet } from "@angular/router";
import { DisplayErrorComponent } from "./adapter/view/display-error/display-error.component";
import { DisplaySuccessComponent } from "./adapter/view/display-success/display-success.component";
import { Store } from "@ngrx/store";
import { AppState } from "./domain/store/reducers/app.reducer";
import { isUserLoggedIn } from "./domain/store/selectors/auth.selectors";
import { filter, withLatestFrom } from "rxjs";
import { NavBarComponent } from "./adapter/view/nav-bar/nav-bar.component";
import { userLoggedInChecked } from "./domain/store/actions/auth.actions";
import {
  LOCAL_STORAGE_SERVICE,
  LocalStorageService,
} from "./domain/outbound/local-storage.service";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,
    DisplayErrorComponent,
    DisplaySuccessComponent,
    NavBarComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent implements OnInit {
  title = "Angular-With-Bootstrap-parent";
  constructor(
    private store: Store<AppState>,
    private router: Router,
    @Inject(LOCAL_STORAGE_SERVICE)
    private localStorageService: LocalStorageService,
  ) {}
  ngOnInit(): void {
    const token = this.localStorageService.getItem("token");
    this.store.dispatch(userLoggedInChecked(!!token));
  }
}
