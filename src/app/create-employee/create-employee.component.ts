import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IEmployee } from '../Employee';
import { EmployeeService } from '../employeeService';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employee: IEmployee = { emp_id:"",emp_name: "", emp_role: "",emp_salary:"" };
  submitted =false;
  constructor(private router : Router ,  private empService : EmployeeService) { }

  ngOnInit(): void {
  }

  save() {
    console.log(this.employee)
    this.empService
    .createUser(this.employee)
      .subscribe(data => {
        console.log(data,"created user")
        this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/employee']);
  }

}
