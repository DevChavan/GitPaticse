import { NgModule } from '@angular/core';
import { routing } from "./chart.routing.module";
import { MorrischartComponent } from "./morrischart/morrischart.component";
import { FlotchartComponent } from "./flotchart/flotchart.component";
import {ChartModule} from "primeng/chart";
import {ChartsComponent} from "./charts.component";
import {BarchartComponent} from "./barchart/barchart.component";
import {FormatFileSizePipe} from "./formatfileSize.pipe";
import {CommonModule} from "@angular/common";
import {UpperCasePipe} from "../employee/upperCase.pipe";

@NgModule({
    declarations: [
      FlotchartComponent,
      MorrischartComponent,
      ChartsComponent,
      BarchartComponent,
      FormatFileSizePipe,
      UpperCasePipe
    ],
    imports: [
      routing,
      ChartModule,
      CommonModule
    ],
    exports:[
      FormatFileSizePipe,
      UpperCasePipe
    ],
    providers: [],
})

export class ChartsModule{

}
