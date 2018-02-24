import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   loginForm: FormGroup = this.builder.group({
    username: new FormControl('', [Validators.required, Validators.minLength(5)]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)])
  });
  
  constructor(private builder:FormBuilder) { 

  }

  ngOnInit() {

  }

  login() {
    console.log(this.loginForm.value);
  }

}

