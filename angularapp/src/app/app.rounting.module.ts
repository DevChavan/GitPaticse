import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ChartsComponent } from './charts/charts.component';
import { FlotchartComponent } from './charts/flotchart/flotchart.component';
import { MorrischartComponent } from './charts/morrischart/morrischart.component';
import { TableComponent } from './table/table.component'
import { FormsComponent } from './forms/forms.component'


const routes: Routes = [
  { 
    path: '', redirectTo: 'dashboard', pathMatch: 'full' 
  },
  { 
    path: 'dashboard', component: DashboardComponent 
  }, 
  { 
    path: 'charts', component: ChartsComponent,
    children: [
      { 
        path: 'float-chart', component: FlotchartComponent 
      },
      { 
        path: 'morris-chart', component: MorrischartComponent 
      }
    ] 
  },
  { 
    path: 'tables', component: TableComponent 
  }, 
  { 
    path: 'forms', component: FormsComponent 
  }
];

export const routing = RouterModule.forRoot(routes);
