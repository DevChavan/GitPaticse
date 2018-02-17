import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { routing } from './app.rounting.module';
import { ChartsComponent } from './charts/charts.component';
import { FlotchartComponent } from './charts/flotchart/flotchart.component';
import { MorrischartComponent } from './charts/morrischart/morrischart.component';
import { TableComponent } from './table/table.component';
import { FormsComponent } from './forms/forms.component'

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ChartsComponent,
    FlotchartComponent,
    MorrischartComponent,
    TableComponent,
    FormsComponent,  // componets
  ],
  imports: [
    BrowserModule, 
    routing
  ],
  providers: [],  // services
  bootstrap: [AppComponent]
})
export class AppModule { }
