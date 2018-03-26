import { NgModule } from '@angular/core';
import { routing } from "./chart.routing.module";
import { MorrischartComponent } from "./morrischart/morrischart.component";
import { FlotchartComponent } from "./flotchart/flotchart.component";
import {ChartModule} from "primeng/chart";
import {ChartsComponent} from "./charts.component";
import {BarchartComponent} from "./barchart/barchart.component";

@NgModule({
    declarations: [
      FlotchartComponent,
      MorrischartComponent,
      ChartsComponent,
      BarchartComponent
    ],
    imports: [
      routing,
      ChartModule,

    ],
    providers: [],
})

export class ChartsModule{

}
