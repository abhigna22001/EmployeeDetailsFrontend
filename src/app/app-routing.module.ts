import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
  {path: 'employee', component : EmployeeListComponent},
  {path: 'employee/details/:empId', component : EmployeeDetailComponent},
  {path: 'employee/addEmployee', component : CreateEmployeeComponent},
  {path: 'employee/update/:empId', component : UpdateEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [EmployeeDetailComponent , EmployeeListComponent , CreateEmployeeComponent , UpdateEmployeeComponent];

