import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-user-header",
  standalone: true,
  imports: [],
  templateUrl: "./user-header.component.html",
  styleUrl: "./user-header.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserHeaderComponent {}
