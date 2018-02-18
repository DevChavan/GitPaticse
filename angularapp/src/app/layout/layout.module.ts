import { NgModule } from "@angular/core";
import { DashboardComponent } from '../dashboard/dashboard.component';
import { TableComponent } from '../table/table.component';
import { routing } from "./layout.routing.module";
import { LayoutComponent } from "./layout.component";
import { ChartModule } from "../charts/chart.module";

@NgModule({
    declarations: [
        DashboardComponent,
        TableComponent,
        LayoutComponent
    ],
    imports: [
        routing,
        ChartModule
    ],  
    providers: [],
})

export class LayoutModule{

}