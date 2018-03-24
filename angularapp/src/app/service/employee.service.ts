import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Router} from "@angular/router";
import {EmployeeModel} from "../models/employee.model";

@Injectable()

export class EmployeeService {
  constructor( private http: HttpClient,private router:Router) {}
  getAll() {
    return this.http.get<EmployeeModel[]>('assets/data/employee.json');
  }
}
