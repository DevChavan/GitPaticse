import { DashboardComponent } from "../dashboard/dashboard.component";
import { TableComponent } from "../table/table.component";
import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "./layout.component";
import { BranchComponent } from "../branch/branch.component";
import {AuthGuard} from "../service/authguard.service";
import {EmployeeComponent} from "../employee/employee.component";

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
        {
            path: '', redirectTo: 'dashboard', pathMatch:'full', canActivate:[AuthGuard]
        },
        {
            path: 'dashboard', component: DashboardComponent ,canActivate:[AuthGuard]
        },
        {
            path: 'employee', component: EmployeeComponent ,canActivate:[AuthGuard]
        },
        {
            path: 'branch', component: BranchComponent ,canActivate:[AuthGuard]
        },
        {
            path: 'charts', loadChildren:'../charts/chart.module#ChartsModule' ,canActivate:[AuthGuard]
        }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
