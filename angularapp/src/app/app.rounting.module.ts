import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { AuthGuard } from "./service/authguard.service"

const routes: Routes = [
  {
    path: '', loadChildren: './layout/layout.module#LayoutModule',
    canActivate: [AuthGuard],
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: '**', redirectTo:'' // Wrong url hit.
    // this will redirect to Dashboard
  }
];

export const routing = RouterModule.forRoot(routes);
