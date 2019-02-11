import { Component, OnInit } from '@angular/core';
import { Employee } from './employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  allEmployees: Array<Employee> = [];
  userName: string;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getAllEmployees();
  }

  private getAllEmployees() {
    this.employeeService.getAllEmployees().subscribe(allEmployeyes => {
      this.allEmployees = allEmployeyes;
    });
  }

  addEmployee(){
    // alert(this.userName);
    this.employeeService.addEmployee(this.userName).subscribe(response=>{
      console.log(response);
      this.getAllEmployees();
    });
  }

}
