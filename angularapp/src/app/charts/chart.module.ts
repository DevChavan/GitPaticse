import { NgModule } from '@angular/core';
import { routing } from "./chart.routing.module";
import { MorrischartComponent } from "./morrischart/morrischart.component";
import { FlotchartComponent } from "./flotchart/flotchart.component";



@NgModule({
    declarations: [
        FlotchartComponent,
        MorrischartComponent,
    ],
    imports: [
        routing
    ],  
    providers: [],
})

export class ChartModule{

}