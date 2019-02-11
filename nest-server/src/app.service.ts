import { Injectable } from '@nestjs/common';
import { Employee } from './employee.model';

@Injectable()
export class AppService {
  
  private allEmployees: Array<Employee>;

  constructor(){
    this.allEmployees = [];
    
    let employee = new Employee();
    employee.id = 100;
    employee.name = 'Balram';
    this.allEmployees.push(employee);

    employee = new Employee();
    employee.id = 200;
    employee.name = 'Ivan';
    this.allEmployees.push(employee);

    employee = new Employee();
    employee.id = 300;
    employee.name = 'Hugo';
    this.allEmployees.push(employee);

    employee = new Employee();
    employee.id = 400;
    employee.name = 'Sebastian';
    this.allEmployees.push(employee);
  }
  getHello(): object {
    return { 'msg': 'Hello from Nestjs!' };
  }

  getAllEmployees(): Array<Employee>{
    return this.allEmployees;
  }

  addEmployee(newEmployee: Employee): any {
    this.allEmployees.push(newEmployee);
  }
}
