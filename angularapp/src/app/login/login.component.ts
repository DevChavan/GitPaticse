import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UserService } from "../service/user.service";
import { Router } from "@angular/router";
import {UserModel} from "../models/user.model";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = new FormControl('', [
    Validators.required,
    Validators.minLength(5)
  ]);

  password = new FormControl('', [Validators.required]);

  errMessage: string; // Error message

  loginForm: FormGroup = this.builder.group({
    username: new FormControl('', [Validators.required, Validators.minLength(5)]),
    password: new FormControl('', [Validators.required])
  });

  constructor(private builder: FormBuilder, private userservice: UserService, private router: Router) { }

  ngOnInit() {

  }

  login() {

    if(this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.userservice.authenticate(this.loginForm.value).subscribe(
        result => {
          console.log(result instanceof UserModel);
          //if(result instanceof UserModel) {
            console.log(result);
            this.router.navigate(['/dashboard']);
          //}
        },
        err => {
          console.log(err.error);
          this.errMessage = err.error;
        }
      )}
    // Attempt Logging in...
  }

}

