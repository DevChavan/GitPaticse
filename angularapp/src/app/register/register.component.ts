import {Component, OnInit} from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UserService } from "../service/user.service";
import { Router } from "@angular/router";
import {UserModel} from "../models/user.model";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  firstName = new FormControl('', [
      Validators.required,
  ])
  lastName = new FormControl('', [
      Validators.required,
  ])
  username =  new FormControl('', [
    Validators.required,
  ])
  password = new FormControl('', [
    Validators.required
  ])
  registerForm: FormGroup = this.builder.group({
    firstName: this.firstName,
    lastName: this.lastName,
    username: this.username,
    password: this.password,
  });
   constructor(
    private builder: FormBuilder,
    private usersevice: UserService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  register() {
    console.log(this.registerForm.value);
    // Attempt Logging in...
    if(this.registerForm.valid) {
      console.log(this.registerForm.value);
      //debugger;
      this.usersevice.create(this.registerForm.value).subscribe(
        result => {
          console.log("ssad", result instanceof UserModel);
          if(result instanceof UserModel) {
            //console.log("sadsa", result);
            this.router.navigate(['/login']);
          }
        },
        error => {
          console.log(error);
        }
      )
    }
  }
}
