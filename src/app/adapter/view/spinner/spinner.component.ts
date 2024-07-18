import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "app-spinner",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./spinner.component.html",
  styleUrl: "./spinner.component.scss",
})
export class SpinnerComponent {
  dots = Array(8).fill(0); // Array to generate 8 dots
}
