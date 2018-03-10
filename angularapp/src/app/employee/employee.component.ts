import {Component} from "@angular/core";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent {
  value1:Date;
  value2:Date;

  employeeForm: FormGroup;
  constructor(
    private builder:FormBuilder,
  ){
    this.employeeForm = this.builder.group({
      employeeid: new FormControl('', [
        Validators.required,
      ]),
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
      employeepayscale: new FormControl('', [
        Validators.required,
      ]),
    })
  }
  ngOnInit() {
  }

  addemployee() {
    console.log(this.employeeForm.value);
  }
}
