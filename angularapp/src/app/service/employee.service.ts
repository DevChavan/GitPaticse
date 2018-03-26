import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Router} from "@angular/router";
import {EmployeeModel} from "../models/employee.model";
import {apiConfig} from "../app.config";
import {UserModel} from "../models/user.model";
import {Subject} from "rxjs/Subject";

@Injectable()

export class EmployeeService {
  //subject using observable
  public employeeListSub = new Subject<EmployeeModel[]>();
  empList: EmployeeModel[];

  constructor( private http: HttpClient,private router:Router) {}

  setEmpListUsingSub(empList){
    this.employeeListSub.next(empList);
  }

  getEmpListUsingSub(){
    return this.employeeListSub.asObservable();
  }

  getAll() {
    return this.http.get<EmployeeModel[]>(apiConfig.apiUrl+'/employee');
  }

  create(employee) {
    return this.http.post<EmployeeModel>(apiConfig.apiUrl+'/employee/create', employee);
  }

  getById(_id: string) {
    return this.http.get(apiConfig.apiUrl + '/employee/' + _id);
  }

  update(emp: EmployeeModel) {
    return this.http.put(apiConfig.apiUrl + '/employee/' + emp._id, emp);
  }

  delete(_id: string) {
    return this.http.delete(apiConfig.apiUrl + '/employee/' + _id);
  }

}
