import { Get, Controller, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { Employee } from './employee.model';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllEmployees(): object {
    return this.appService.getAllEmployees();
  }

  @Post()
  addEmployee(@Body() newEmployee:Employee ) : Employee {
    this.appService.addEmployee(newEmployee);
    console.log('post ', newEmployee);
    
    return newEmployee;
  }
}
