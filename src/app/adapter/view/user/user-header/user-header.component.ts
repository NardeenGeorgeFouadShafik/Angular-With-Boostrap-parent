import { ChangeDetectionStrategy, Component } from "@angular/core";
import { I18NextModule } from "angular-i18next";

@Component({
  selector: "app-user-header",
  standalone: true,
  imports: [I18NextModule],
  templateUrl: "./user-header.component.html",
  styleUrl: "./user-header.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserHeaderComponent {}
