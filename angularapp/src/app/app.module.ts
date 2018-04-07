import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { routing } from './app.rounting.module';
import { LoginComponent } from "./login/login.component";
import { LayoutModule } from "./layout/layout.module";
import { FormBuilder, FormsModule, FormGroup, ReactiveFormsModule }   from '@angular/forms';
import { RegisterComponent } from "./register/register.component";
import { UserService } from "./service/user.service";
import { HttpClientModule } from "@angular/common/http";
import {AuthGuard} from "./service/authguard.service";
import {JwtInterceptor, JwtInterceptorProvider} from "./service/interceptor.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {EmployeeService} from "./service/employee.service";
import {CommonModule} from "@angular/common";
import {CheckboxModule} from "primeng/checkbox";

@NgModule({
  declarations: [ // components
    AppComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [ // Modules
    routing,
    CommonModule,
    CheckboxModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [ // services
    UserService,
    ReactiveFormsModule,
    AuthGuard,
    JwtInterceptorProvider,
    EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
