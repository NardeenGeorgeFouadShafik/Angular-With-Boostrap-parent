import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { LoginComponent } from "../auth/login/login.component";
import { DisplayErrorComponent } from "../display-error/display-error.component";
import { DisplaySuccessComponent } from "../display-success/display-success.component";
import { NavBarComponent } from "../nav-bar/nav-bar.component";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [
    RouterOutlet,
    LoginComponent,
    NavBarComponent,
    DisplayErrorComponent,
    DisplaySuccessComponent,
  ],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
