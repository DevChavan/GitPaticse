import { RouterModule, Routes } from "@angular/router";
import { FlotchartComponent } from "./flotchart/flotchart.component";
import { MorrischartComponent } from "./morrischart/morrischart.component";

const routes: Routes = [
    { 
        path: 'float-chart', component: FlotchartComponent 
    },
    { 
        path: 'morris-chart', component: MorrischartComponent 
    }
]

export const routing = RouterModule.forChild(routes);