import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { routing } from './app.rounting.module';
import { LoginComponent } from "./login/login.component";
import { LayoutModule } from "./layout/layout.module";
<<<<<<< HEAD
import { FormBuilder, FormsModule, FormGroup, ReactiveFormsModule }   from '@angular/forms';
import { RegisterComponent } from "./register/register.component";
import { UserService } from "./service/user.service";
import { HttpClientModule } from "@angular/common/http";
=======
import { NgForm, FormsModule, ReactiveFormsModule, FormGroup }   from '@angular/forms';
>>>>>>> 554214498de14cd8f33c3faeca7dc37d2e5c4bc6


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
<<<<<<< HEAD
    ReactiveFormsModule, 
    HttpClientModule
  ],  
  providers: [ // services
    UserService,
=======
    ReactiveFormsModule
>>>>>>> 554214498de14cd8f33c3faeca7dc37d2e5c4bc6
  ],  
  bootstrap: [AppComponent]
})
export class AppModule { }
