import { RouterModule, Routes } from "@angular/router";
import { FlotchartComponent } from "./flotchart/flotchart.component";
import { MorrischartComponent } from "./morrischart/morrischart.component";

const routes: Routes = [
    { 
        path: '', redirectTo: 'float-chart', pathMatch: 'full' 
    },
    { 
        path: 'charts/float-chart', component: FlotchartComponent 
    },
    { 
        path: 'charts/morris-chart', component: MorrischartComponent 
    }
]

export const routing = RouterModule.forChild(routes);