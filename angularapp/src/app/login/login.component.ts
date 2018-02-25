import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UserService } from "../service/user.service";


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

   loginForm: FormGroup = this.builder.group({
    username: new FormControl('', [Validators.required, Validators.minLength(5)]),
    password: new FormControl('', [Validators.required, Validators.minLength(4)])
  });
  
  constructor(private builder: FormBuilder, private userservice: UserService) { }

  ngOnInit() {

  }

  login() {
    
    if(this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.userservice.authenticate(this.loginForm.value).subscribe(
        result => {
          console.log(result);
        }
      )}
    // Attempt Logging in...
  }  

}

