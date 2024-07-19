import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-spinner",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./spinner.component.html",
  styleUrl: "./spinner.component.scss",
})
export class SpinnerComponent {
  @Input() hasMoreData?: boolean;
  @Input() isMoreUsersLoading?: boolean;
  @Output() loadMoreUsersClicked = new EventEmitter();
  dots = Array(8).fill(0);

  loadMoreUsers() {
    this.loadMoreUsersClicked.emit();
  }
}
