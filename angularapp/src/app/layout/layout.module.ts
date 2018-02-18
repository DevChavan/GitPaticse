import { NgModule } from "@angular/core";
import { routing } from "./layout.routing.module";
import { PageTopComponent } from "../common/page-top/pagetop.component";
import { SidebarComponent } from "../common/sidebar/sidebar.component";
import { DashboardComponent } from '../dashboard/dashboard.component';
import { TableComponent } from '../table/table.component';
import { LayoutComponent } from "./layout.component";
import { ChartModule } from "../charts/chart.module";
import { BranchComponent } from "../branch/branch.component";

@NgModule({
    declarations: [
        DashboardComponent,
        TableComponent,
        LayoutComponent,
        SidebarComponent,
        PageTopComponent,
        BranchComponent,
    ],
    imports: [
        routing,
        ChartModule
    ],  
    providers: [],
})

export class LayoutModule{

}