import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from "@angular/forms";
import { User } from "../../../../domain/models/user.model";

@Component({
  selector: "app-user-model",
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: "./user-model.component.html",
  styleUrl: "./user-model.component.scss",
})
export class UserModelComponent implements OnInit {
  userForm?: FormGroup;
  @Output() submitUser: EventEmitter<Partial<User>> = new EventEmitter();
  @Input() selectedUser?: Partial<User>;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: ["", Validators.required],
      jobTitle: ["", Validators.required],
    });
  }

  submit() {
    if (this.userForm?.valid) {
      this.submitUser.emit({
        ...this.selectedUser,
        jobTitle: this.userForm.get("jobTitle")?.value,
        name: this.userForm.get("name")?.value,
      });
      this.userForm.reset();
    }
  }

  getSelectedUserName(): string {
    if (this.selectedUser && this.selectedUser.id) {
      return `${this.selectedUser.first_name} ${this.selectedUser.last_name}`;
    }
    return "";
  }
}
