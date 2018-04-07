import {Component} from "@angular/core";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { EmployeeModel } from "../models/employee.model";
import {EmployeeService} from "../service/employee.service";
import { omit, findIndex, isEmpty } from "lodash";
import {isNullOrUndefined} from "util";
import { UpperCasePipe } from './upperCase.pipe'

@Component({
  selector: 'employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent {

  accordianIndex: number= -1;
  empListAccordian: boolean=false;
  employeeList: EmployeeModel[];

  employee: EmployeeModel;

  employeeForm: FormGroup;

  designations: Array<any> = [
    {
      "label": "Manager", "value": "Manager"
    },
    {
      "label":"Ass. manager", "value": "Ass. manager"
    },
    {
      "label":"SDM", "value":"SDM"
    },
    {
      "label": "ASDM", "value": "ASDM"
    }
  ];

  payscales: Array<any> = [
    {
      "label": "Grade A", "value": "Grade A"
    },
    {
      "label": "Grade B", "value": "Grade B"
    },
    {
      "label": "Grade C", "value": "Grade C"
    },
    {
      "label": "Grade D", "value": "Grade D"
    },
  ];

  branches: Array<any> = [
    {
      "label": "Branch A", "value": "Branch A"
    },
    {
      "label": "Branch B", "value": "Branch B"
    },
    {
      "label": "Branch C", "value": "Branch C"
    },
    {
      "label": "Branch D", "value": "Branch D"
    },
  ]

  status = [
    {
      "label": "Full Time", "value": "Full Time"
    },
    {
      "label": "Part Time", "value": "Part Time"
    }
   ]

  constructor( private employeeservice: EmployeeService){
    this.employee = new EmployeeModel();

    this.employeeForm = new FormGroup({
      // employeeid: new FormControl('', [
      //   Validators.required,
      // ]),
      employeename: new FormControl('', [
        Validators.required,
      ]),
      employeeaddress: new FormControl('', [
        Validators.required,
      ]),
      employeedesignation: new FormControl('', [
        Validators.required,
      ]),
      employeephone: new FormControl('', [
        Validators.required,
      ]),
      employeedob: new FormControl('', [
        Validators.required,
      ]),
      employeedoj: new FormControl('', [
        Validators.required,
      ]),
      employeecheck: new FormControl('', [
        Validators.required,
      ]),
      employeebranch: new FormControl('', [
        Validators.required,
      ]),
      employeepayscale: new FormControl('', [
        Validators.required,
      ]),
    });
    this.accordianIndex = 0;
  }

  ngOnInit() {
    this.getEmployee();
    //this.editEmployee();
  }

  getEmployee(){
    this.employeeservice.getAll().subscribe(
      result=>{
        console.log("employee", result);
        this.employeeList=result as EmployeeModel[];
        console.log("list emp:",this.employeeList);
        this.employeeservice.setEmpListUsingSub(this.employeeList);
      },
      error=>{

      })
  }

  editEmployee(employee) {
    //console.log("Emp ID", employee);
    this.employee = omit(employee, ['doj', 'dob']),
    this.employee.dob = new Date(employee.dob);
    this.employee.doj = new Date(employee.doj);
    this.employee._id = employee._id;
    console.log("DOJ", this.employee.doj);
    console.log("Emp ID", this.employee);
    this.accordianIndex = 0;
  }
  onTabOpen(event) {
    console.log(event);
    this.accordianIndex = event.index;

  }
  submitEmployee() {

    if(!isNullOrUndefined(this.employee) && !isEmpty(this.employee) && this.employeeForm.valid) {
      // Without server logical function (Using .JSON file)
      // this.employee.dob = this.employeeForm.value.employeedob;
      // let index = findIndex(this.employeeList, { 'name': this.employee.name})
      // console.log("index", index);
      // if(index == -1) {
      //   //this.employee._id = isNullOrUndefined(this.employee._id)? 1 : this.employee._id +1;
      //   console.log("ss", this.employee);
      //   this.employeeList.push(this.employee);
      //   console.log(this.employeeList);
      // } else {
      //   this.employeeList.splice(index, 1, this.employee);
      // }

      //With serve connection

      let index = findIndex(this.employeeList, { '_id': this.employee._id})
      if(index == -1) {
        this.employeeservice.create(this.employee).subscribe(
          result => {
            console.log("emp:", result)
            this.getEmployee();
          },
          error => {

          }
        )
      } else {
        this.employeeservice.update(this.employee).subscribe(
          result => {
            this.getEmployee();
          }
        )
      }

    }


  }
  deleteEmployee(employee) {
    //const index = this.employeeList.findIndex(emp => employee._id == emp._id);

    // Logic using .JSON file
    // this.employeeList.splice(index, 1);
    // console.log("delete index", index);
    // console.log(this.employeeList);
    this.employeeservice.delete(employee._id).subscribe(
      result => {
        this.getEmployee();
      },
      error => {

      }
    )


  }
}
