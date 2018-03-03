import { DashboardComponent } from "../dashboard/dashboard.component";
import { TableComponent } from "../table/table.component";
import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "./layout.component";
import { BranchComponent } from "../branch/branch.component";
import {AuthGuard} from "../service/authguard.service";

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
            path: 'tables', component: TableComponent ,canActivate:[AuthGuard]
        },
        {
            path: 'branch', component: BranchComponent ,canActivate:[AuthGuard]
        },
        {
            path: 'charts', loadChildren:'../charts/chart.module#ChartModule' ,canActivate:[AuthGuard]
        }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
