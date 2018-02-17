import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { routing } from './app.rounting.module';
import { TableComponent } from './table/table.component';
import { ChartModule } from "./charts/chart.module";  


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TableComponent,  // componets
  ],
  imports: [
    BrowserModule, 
    routing,
    ChartModule
  ],  
  providers: [],  // services
  bootstrap: [AppComponent]
})
export class AppModule { }
