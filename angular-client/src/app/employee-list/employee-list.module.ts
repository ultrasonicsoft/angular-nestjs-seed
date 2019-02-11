import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { EmployeeListComponent } from './employee-list.component';

@NgModule({
  declarations: [EmployeeListComponent],
  exports: [EmployeeListComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class EmployeeListModule { }
