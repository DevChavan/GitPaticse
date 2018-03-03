import { Component, OnInit } from '@angular/core';
import {UserService} from "../../service/user.service";

@Component({
    selector: 'app-page-top',
    templateUrl: './pagetop.component.html',
    styleUrls: ['./pagetop.component.css']
})

export class PageTopComponent {
// variable  declaration
  username:string;
  //aray for user list to show list empty array
  userList:Array<any>=[];

  constructor(private userservice:UserService){
    if(localStorage.getItem('currentUser')){
      //console.log(localStorage.getItem('currentUser'));
      let user= localStorage.getItem('currentUser');
      this.username=JSON.parse(user).username;
    }
    this.getAllUser();
  }
  ngOnInit() {

  }
  logout(){
    this.userservice.logOut();
  }
   getAllUser(){
   this.userservice.getAll().subscribe(
     result=>{
       console.log(result);
        this.userList=result;
     },
     error=>{

     })
   }
}
