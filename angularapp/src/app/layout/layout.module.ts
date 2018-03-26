import {NgModule} from "@angular/core";
import {routing} from "./layout.routing.module";
import {PageTopComponent} from "../common/page-top/pagetop.component";
import {SidebarComponent} from "../common/sidebar/sidebar.component";
import {DashboardComponent} from '../dashboard/dashboard.component';
import {TableComponent} from '../table/table.component';
import {LayoutComponent} from "./layout.component";
import {ChartsModule} from "../charts/chart.module";
import {BranchComponent} from "../branch/branch.component";
import {EmployeeComponent} from "../employee/employee.component"
import {AccordionModule} from "primeng/accordion";
import {DataTableModule} from "primeng/datatable";
import {CalendarModule} from "primeng/calendar";
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import {CommonModule} from "@angular/common";
//import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  declarations: [
    DashboardComponent,
    TableComponent,
    LayoutComponent,
    SidebarComponent,
    PageTopComponent,
    BranchComponent,
    EmployeeComponent
  ],
  imports: [
    CommonModule,
    routing,
    ChartsModule,
    AccordionModule,
    DataTableModule,
    CalendarModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
})

export class LayoutModule {

}
