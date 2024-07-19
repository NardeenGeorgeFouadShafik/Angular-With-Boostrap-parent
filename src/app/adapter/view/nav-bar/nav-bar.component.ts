import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { I18NextModule } from "angular-i18next";
import { AppState } from "../../../domain/store/reducers/app.reducer";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { isUserLoggedIn } from "../../../domain/store/selectors/auth.selectors";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-nav-bar",
  standalone: true,
  imports: [I18NextModule, CommonModule, RouterModule],
  templateUrl: "./nav-bar.component.html",
  styleUrl: "./nav-bar.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavBarComponent implements OnInit {
  isUserLoggedIn$?: Observable<boolean | undefined>;
  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {
    this.isUserLoggedIn$ = this.store.select(isUserLoggedIn);
  }
}
