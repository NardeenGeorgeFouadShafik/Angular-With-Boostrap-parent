import { Routes } from "@angular/router";
import { AuthGuard } from "./shared/security/auth.guard";
import { HomeComponent } from "./adapter/view/home/home.component";
import { LoginComponent } from "./adapter/view/auth/login/login.component";
import { UserComponent } from "./adapter/view/user/user.component";

export const routes: Routes = [
  {
    path: '',
    //canActivate: [AuthGuard],
    component: HomeComponent,
    children: [
      {
        path: 'users',
        component: UserComponent,
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];;
