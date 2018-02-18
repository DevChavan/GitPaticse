import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  { 
    path: '', loadChildren: './layout/layout.module#LayoutModule', 
  },
  { 
    path: 'login', component: LoginComponent 
  }
];

export const routing = RouterModule.forRoot(routes);
