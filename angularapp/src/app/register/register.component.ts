import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UserService } from "../service/user.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  firstname = new FormControl('', [
      Validators.required,
  ])
  lastname = new FormControl('', [
      Validators.required,
  ])
  username =  new FormControl('', [
    Validators.required,
  ])
  password = new FormControl('', [
    Validators.required
  ])
  registerForm: FormGroup = this.builder.group({
    firstname: this.firstname,
    lastname: this.lastname,
    username: this.username,
    password: this.password,
  });
   constructor(
    private builder: FormBuilder, 
    private usersevice: UserService, 
    private router: Router
  ) { }

  register() {
    //console.log(this.registerForm.value);
    // Attempt Logging in...
    if(this.registerForm.valid) {
      console.log(this.registerForm.value);
      //debugger;
      this.usersevice.create(this.registerForm.value).subscribe(
        result => {
          console.log(result);
          this.router.navigate(['/login']);
        },
        error => {
          console.log(error);
        }
      )  
    }
    
  }
  ngOnInit() {
  } 
}