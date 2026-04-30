import { Component, inject, OnInit, signal } from '@angular/core';
import { Employee } from '../../model/Employee';
import { Employeeservice } from '../../services/Employeeserivces/employeeservice';
import { catchError } from 'rxjs';
import { ApiCard } from '../api-card/api-card';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-api',
  standalone: true,
  imports: [ApiCard, CommonModule, FormsModule],
  templateUrl: './employee-api.html',
  styleUrl: './employee-api.css',
})
export class EmployeeApi implements OnInit {
  employeeList = signal<Employee[]>([]);
  empService = inject(Employeeservice);

  ngOnInit(): void {
    this.getEmployees();
  }
  private getUrl = `employees`;
  getEmployees() {
    this.empService
      .getEmployees(this.getUrl)
      .pipe(
        catchError((err) => {
          console.log('GET Error:', err);
          throw err;
        }),
      )
      .subscribe({
        next: (res: any) => {
          console.log('API RESPONSE:', res);
          this.employeeList.set(res.data);
        },
        error: (err) => {
          console.log('API ERROR:', err);
        },
      });
  }

  //details
  username: string = '';
  id: string = '';
  salary: string = '';
  age: string = '';
  private postUrl = 'create';
  createEmployee() {
    const newEmployee: Employee = {
      id: this.id,
      employee_name: this.username,
      employee_salary: this.salary,
      employee_age: this.age,
      profile_image: '',
    };
    this.empService
      .addEmployees(newEmployee, this.postUrl)
      .pipe(
        catchError((err) => {
          console.log('POST Error:', err);
          throw err;
        }),
      )
      .subscribe((res) => {
        console.log('Employee Added Successfully', res);
        this.getEmployees();
      });
  }

  showForm: boolean = false;

  toggleForm() {
    this.showForm = !this.showForm;
  }
}
