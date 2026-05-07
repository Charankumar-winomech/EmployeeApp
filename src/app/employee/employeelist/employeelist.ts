import { Component, inject, signal } from '@angular/core';
import { Employee } from '../../model/Employee';
import { Employeeservice } from '../../services/Employeeserivces/employeeservice';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { FilterPipe } from '../../pipes/filter-pipe';
import { MatDialog } from '@angular/material/dialog';
import { DialogBox } from './dialog-box/dialog-box';
import { MatInputModule } from '@angular/material/input';
import { EmployeeCard } from '../employeecard/employeecard';
@Component({
  selector: 'app-employeelist',
  standalone: true,
  imports: [EmployeeCard, CommonModule, FormsModule, MatIconModule, FilterPipe, MatInputModule],
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

  errorMessage = signal('');
  showError = signal(false);

  getEmployees() {
    this.empService.getEmployees().subscribe({
      next: (res: any) => {
        this.employeeList.set(res.data);
      },
      error: (err) => {
        console.log('GET API ERROR:', err);
  
        const status = err?.status;
        const message = err?.error?.message || err?.message || 'Unknown error';

        this.errorMessage.set(`Error ${status}: ${message}`);
        this.showError.set(true);
        setTimeout(() => {
          this.showError.set(false);
        }, 4000);
      },
    });
  }

  //details
  username: string = '';
  salary: string = '';
  age: string = '';

  createEmployee() {
    if (this.username === '' || this.salary === '' || this.age === '') {
      alert('Enter a value');
    }
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
        console.log('POST API ERROR:', err);

        const status = err?.status;
        const message = err?.error?.message || err?.message || 'Unknown error';

        this.errorMessage.set(`Error ${status}: ${message}`);
        this.showError.set(true);
        setTimeout(() => {
          this.showError.set(false);
        }, 3000);
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
  dialog = inject(MatDialog);
  openDialog(): void {
    this.dialog
      .open(DialogBox)
      .afterClosed()
      .subscribe((res) => {
        if (res) {
          this.username = res.name;
          this.salary = res.salary;
          this.age = res.age;
          if (this.username !== '' || this.salary !== '' || this.age !== '') {
            this.createEmployee();
          }
        }
      });
  }
}
