import { Injectable } from '@angular/core';
import { Employee } from './employee-list/employee.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  allEmployees: Array<Employee> = [];
  url = 'http://localhost:3000/';

  constructor(private httpClient:HttpClient) { }

  getAllEmployees(): Observable<Array<Employee>>{
    return this.httpClient.get<Array<Employee>>(this.url);
  }

  addEmployee(userName: string): any {
    const newEmployee = new Employee();
    newEmployee.name = userName;
    return this.httpClient.post(this.url, newEmployee);
  }
}
