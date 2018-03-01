import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { routing } from './app.rounting.module';
import { LoginComponent } from "./login/login.component";
import { LayoutModule } from "./layout/layout.module";
import { FormBuilder, FormsModule, FormGroup, ReactiveFormsModule }   from '@angular/forms';
import { RegisterComponent } from "./register/register.component";
import { UserService } from "./service/user.service";
import { HttpClientModule } from "@angular/common/http";


@NgModule({
  declarations: [ // components
    AppComponent,
    LoginComponent,
    RegisterComponent  
  ],
  imports: [ // Modules
    BrowserModule, 
    routing,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule, 
    HttpClientModule
  ],  
  providers: [ // services
    UserService,
    ReactiveFormsModule
  ],  
  bootstrap: [AppComponent]
})
export class AppModule { }
