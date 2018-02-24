import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { routing } from './app.rounting.module';
import { LoginComponent } from "./login/login.component";
import { LayoutModule } from "./layout/layout.module";
import { NgForm, FormsModule, ReactiveFormsModule, FormGroup }   from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,  // componets
  ],
  imports: [
    BrowserModule, 
    routing,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],  
  providers: [],  // services
  bootstrap: [AppComponent]
})
export class AppModule { }
