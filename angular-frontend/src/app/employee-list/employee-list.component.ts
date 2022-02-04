import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  // employees: Employee[] = [new Employee ('dddd','bbb','ccc')];

  employees: Employee[];
  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
    // this.employees = [{"id": 1, "firstName": "ali", "lastName": "Benali", "emailId": "ali@gmail.com"},
    // {"id": 2, "firstName": "michel", "lastName": "Benmichel",  "emailId": "michel@gmail.com"}];
    this.getAllEmployees();
  }

  private getAllEmployees() {
    this.employeeService.getEmployeeList()
      .subscribe(data => {
        this.employees = data;
      });
  }

  // navigate to page employee details
  employeeDetails(id: number){
this.router.navigate(['employee-details', id])
  }

  // navigate to page update employee
  updateEmployee(id: number) {
    this.router.navigate(['update-employee', id]);
  }

  // delete employee by Id
  deletedEmployee(id: number){
    this.employeeService.deleteEmployee(id)
    .subscribe(data => {
      console.log(data);
      this.getAllEmployees();
    })
  }

  

}
