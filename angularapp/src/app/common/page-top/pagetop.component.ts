import { Component, OnInit } from '@angular/core'
import {UserService} from "../../service/user.service";

@Component({
    selector: 'app-page-top',
    templateUrl: './pagetop.component.html',
    styleUrls: ['./pagetop.component.css']
})

export class PageTopComponent {

  username: string;
  userList: Array<any> = [];

  constructor( private userService: UserService){
    //localStorage.getItem("currentUser");
    if(localStorage.getItem("currentUser")) {
      console.log(localStorage.getItem("currentUser"));
      let localstorageUser= localStorage.getItem("currentUser");
      this.username = JSON.parse(localstorageUser).username;
      console.log("test", this.username);
    }
    this.getAllUser();
  }
  ngOnInit(){

  }
  logOut(){
    this.userService.logOut();
  }
  getAllUser() {
    this.userService.getAll().subscribe(
      result=> {
        this.userList = result;
        console.log(result);
      },
      err=> {

      }
    )
  }
}
