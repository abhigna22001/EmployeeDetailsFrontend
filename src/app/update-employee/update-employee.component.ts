import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IEmployee } from '../Employee';
import { EmployeeService } from '../employeeService';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  empId : any;
  employee: IEmployee = { emp_id:"",emp_name: "", emp_role: "",emp_salary:"" };
  updated = false;
  constructor(private route: ActivatedRoute, private router : Router, private empService: EmployeeService) { }

  ngOnInit(): void {
    this.empId = this.route.snapshot.params['empId']
    this.empService.getEmployee(this.empId)
    .subscribe(data => {
      this.employee.emp_id = data.emp_id.toString();
      this.employee.emp_name = data.emp_name.toString();
      this.employee.emp_role= data.emp_role.toString();
      this.employee.emp_salary = data.emp_salary.toString()
    },error => console.log(error));
  }

  updateUser(){
    this.empService.updateEmployee(this.empId,this.employee)
    .subscribe(data => {
      console.log(data);
      this.gotoList();
    },error => console.log(error))
  }

  onSubmit(){
    this.updateUser();
    this.updated = true;
  }

  empList(){
    this.router.navigate(['employee']);
  }

  gotoList(){
    this.router.navigate(['/employee'])
  }

}
