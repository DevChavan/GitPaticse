import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { apiConfig } from "../app.config"
import  {UserModel} from "../models/user.model";
import {observableToBeFn} from "rxjs/testing/TestScheduler";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import {Router} from "@angular/router";

@Injectable()
export class UserService {
  constructor( private http: HttpClient,private router:Router) {}

  getAll() {
    return this.http.get<UserModel[]>(apiConfig.apiUrl+'/users');
  }
  create(user) {
    return this.http.post<UserModel>(apiConfig.apiUrl+'/users/register', user);
  }
  authenticate(user):Observable<UserModel>{
    //console.log(user);
    // map method in angular 2 like Observable
    return this.http.post<any>(apiConfig.apiUrl+'/users/authenticate', user).map(
      user=>{
        if(user && user.token){
          //convert object into string useing Json stringify
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
        return user;
      }
    );
  }
  logOut(){
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }
}
