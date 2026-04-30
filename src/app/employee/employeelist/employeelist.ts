import { Component, inject, signal } from '@angular/core';
import { Employee } from '../../model/Employee';
import { Employeeservice } from '../../services/Employeeserivces/employeeservice';
import { ApiCard } from '../api-card/api-card';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { FilterPipe } from '../../pipes/filter-pipe';

@Component({
  selector: 'app-employeelist',
  standalone: true,
  imports: [ApiCard, CommonModule, FormsModule, MatIconModule, FilterPipe],
  templateUrl: './employeelist.html',
  styleUrl: './employeelist.css',
})
export class Employeelist {
  employeeList = signal<Employee[]>([]);
  empService = inject(Employeeservice);
  searchTerm = signal('');

  ngOnInit(): void {
    this.getEmployees();
  }

  errorMessage: string = '';

  getEmployees() {
    this.empService.getEmployees().subscribe({
      next: (res: any) => {
        this.employeeList.set(res.data);
      },
      error: (err) => {
        console.log('API ERROR:', err);

        const status = err?.status;
        const message = err?.error?.message || err?.message || 'Unknown error';

        this.errorMessage = `Error ${status}: ${message}`;
      },
    });
  }

  //details
  username: string = '';
  salary: string = '';
  age: string = '';

  createEmployee() {
    const newEmployee: Employee = {
      employee_name: this.username,
      employee_salary: this.salary,
      employee_age: this.age,
    };
    this.empService.addEmployees(newEmployee).subscribe({
      next: (res) => {
        console.log('Employee Added Successfully', res);
        this.getEmployees();
      },
      error: (err) => {
        console.log('API ERROR:', err);

        const status = err?.status;
        const message = err?.error?.message || err?.message || 'Unknown error';

        this.errorMessage = `Error ${status}: ${message}`;
      },
    });
  }

  showForm: boolean = false;

  toggleForm() {
    this.showForm = !this.showForm;
  }

  sortOrder: string = '';

  onSortChange(value: string) {
    if (value === 'ascending') {
      this.sortAtoZ();
    } else if (value === 'descending') {
      this.sortZtoA();
    }
  }

  sortAtoZ() {
    return this.employeeList.update((current) =>
      [...current].sort((a, b) => a.employee_name.localeCompare(b.employee_name)),
    );
  }
  sortZtoA() {
    return this.employeeList.update((current) =>
      [...current].sort((a, b) => b.employee_name.localeCompare(a.employee_name)),
    );
  }
}
