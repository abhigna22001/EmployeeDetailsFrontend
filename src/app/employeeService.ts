//import { Injectable } from "@angular/compiler/src/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { IEmployee } from "./Employee";

@Injectable({
    providedIn : 'root'
})
export class EmployeeService{
    private baseUrl = "http://localhost:8080/employees";
    constructor(private http: HttpClient) { }
    getEmployees() : Observable<any> {
        return this.http.get(this.baseUrl);
    }
    createUser(employee : any) {
        return this.http.post<any>(this.baseUrl,employee);
    }
    getEmployee(empId : number) : Observable<IEmployee> {
        return this.http.get<IEmployee>(`${this.baseUrl}/${empId}`)
    }
    updateEmployee(empId : any, value : any): Observable<any>{
        console.log(empId,"errrr",value)
        return this.http.put<any>(`${this.baseUrl}/${empId}`,value)
    }
    deleteEmployee(empId : number) : Observable<any>{
        return this.http.delete(`${this.baseUrl}/${empId}`,{responseType:'text'})
    }
}