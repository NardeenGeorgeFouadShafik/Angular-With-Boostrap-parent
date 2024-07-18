import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { Store } from "@ngrx/store";
import { AppState } from "../../../../domain/store/reducers/app.reducer";
import { loginUser } from "../../../../domain/store/actions/auth.actions";
import { EMAIL_PATTERN } from "../../validators/regExpPatterns";
import { I18NextModule } from "angular-i18next";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, I18NextModule ],
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.scss",
})
export class LoginComponent {
  loginForm?: FormGroup;
  constructor(private fb: FormBuilder,
    private store: Store<AppState>,
) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email:["",  [Validators.required, Validators.pattern(EMAIL_PATTERN)]],
      password: ["", Validators.required],
    });
  }

  onSubmit(): void {
    if (this.loginForm?.valid) {
      this.store.dispatch(loginUser({
        email: this.loginForm.get('email')?.value,
        password: this.loginForm.get('password')?.value,
      }));
      this.loginForm.reset();
    }
  }
}
