import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UserService } from "../service/user.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

 username =  new FormControl('', [
    Validators.required,
    Validators.minLength(5)
])

 registerForm: FormGroup = this.builder.group({
    firstname: new FormControl('', [
        Validators.required,
        Validators.minLength(5)  
    ]),
    lastname: new FormControl('', [
        Validators.required,
        Validators.minLength(5)  
    ]),
    username: this.username,
    password: new FormControl('', [Validators.required]),
  });
     
  constructor(private builder: FormBuilder, private usersevice: UserService) { }

  register() {
    //console.log(this.registerForm.value);
    // Attempt Logging in...
    if(this.registerForm.valid) {
              
    }
    console.log(this.registerForm.valid);
    console.log(this.registerForm);
  }

  ngOnInit() {
  } 
}