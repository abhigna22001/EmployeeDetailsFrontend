import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../Employee';
import { Observable } from 'rxjs';
import { EmployeeService } from '../employeeService';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees : any;
  constructor(private router: Router , private empService : EmployeeService) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    this.employees = this.empService.getEmployees();
  }

  deleteEmployee(empId: number)
  {
    this.empService.deleteEmployee(empId)
    .subscribe(data => {
      console.log(data);
      this.reloadData()
    },
    error => console.log(error));
  }
  
  updateEmployee(empId : number)
  {
    this.router.navigate(['employee/update',empId])
  }

  employeeDetails(empId : number)
  {
    this.router.navigate(['employee/details',empId])
  }

}
