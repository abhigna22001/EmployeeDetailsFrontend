import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IEmployee } from '../Employee';
import { EmployeeService } from '../employeeService';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  empId : any;
  employee :any;
  constructor(private route: ActivatedRoute, private router: Router,private empService : EmployeeService) { }

  ngOnInit(): void {
    this.empId = this.route.snapshot.params['empId'];
    console.log("empId : "+this.empId)
    this.empService.getEmployee(this.empId)
    .subscribe(data=>{
      console.log(data)
      this.employee = data;
    }, error => console.log(error)
    )
  }

  empList(){
    this.router.navigate(['employee']);
  }

}
