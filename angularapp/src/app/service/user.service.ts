import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { apiConfig } from "../app.config"

@Injectable()
export class UserService {
  
  constructor( private http: HttpClient) {  
  }

getAll() {
  return this.http.get(apiConfig.apiUrl+'/users');
}
create(user) {
  return this.http.post(apiConfig.apiUrl+'/users/register', user);
}
authenticate(user) {
  console.log("Auth",user);
  return this.http.post(apiConfig.apiUrl+'/users/authenticate', user);
}


}
