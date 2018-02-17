import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { TableComponent } from './table/table.component'


const routes: Routes = [
  { 
    path: '', redirectTo: 'dashboard', pathMatch: 'full' 
  },
  { 
    path: 'dashboard', component: DashboardComponent 
  },
  { 
    path: 'tables', component: TableComponent 
  }
];

export const routing = RouterModule.forRoot(routes);
