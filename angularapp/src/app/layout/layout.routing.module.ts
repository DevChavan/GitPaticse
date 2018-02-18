import { DashboardComponent } from "../dashboard/dashboard.component";
import { TableComponent } from "../table/table.component";
import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "./layout.component";

const routes: Routes = [
  { 
    path: '', component: LayoutComponent,
    children: [  
        { 
            path: '', redirectTo: 'dashboard', pathMatch:'full'
        },
        { 
            path: 'dashboard', component: DashboardComponent 
        },
        { 
            path: 'tables', component: TableComponent 
        },
        { 
            path: 'charts', loadChildren:'../charts/chart.module#ChartModule' 
        }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
