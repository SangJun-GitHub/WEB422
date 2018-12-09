import { Component, OnInit } from '@angular/core';
import { Employee } from './../data/employee';
import { EmployeeService } from "./../data/employee.service";


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees: Employee[];
  employeeSub: any;
  loadError:boolean=false;

  constructor(private e: EmployeeService) { }

  ngOnInit() {
    try{
    this.employeeSub = this.e.getEmployees().subscribe(employees => this.employees = employees);
    }catch(error){
      this.loadError = true;
      console.log(error);
    }
  }
  ngOnDestroy(){
    if(this.employeeSub) 
    this.employeeSub.unsubscribe();
  }
}