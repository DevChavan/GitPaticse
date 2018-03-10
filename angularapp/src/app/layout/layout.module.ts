import {NgModule} from "@angular/core";
import {routing} from "./layout.routing.module";
import {PageTopComponent} from "../common/page-top/pagetop.component";
import {SidebarComponent} from "../common/sidebar/sidebar.component";
import {DashboardComponent} from '../dashboard/dashboard.component';
import {TableComponent} from '../table/table.component';
import {LayoutComponent} from "./layout.component";
import {ChartModule} from "../charts/chart.module";
import {BranchComponent} from "../branch/branch.component";
import {EmployeeComponent} from "../employee/employee.component"
import {AccordionModule} from "primeng/accordion";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {DataTableModule} from "primeng/datatable";
import {CalendarModule} from "primeng/calendar";
import {BrowserModule} from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

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
    BrowserModule,
    routing,
    ChartModule,
    AccordionModule,
    BrowserAnimationsModule,
    DataTableModule,
    CalendarModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
})

export class LayoutModule {

}
