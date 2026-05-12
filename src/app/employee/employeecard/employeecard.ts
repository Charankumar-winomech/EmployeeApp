import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { Employeeservice } from '../../services/Employeeserivces/employeeservice';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-card',
  imports: [MatMenuModule, MatButtonModule, DatePipe, FormsModule],
  templateUrl: './employeecard.html',
  styleUrl: './employeecard.css',
})
export class EmployeeCard {

  @Input() employee!: any;

  @Output() employeeDeleted = new EventEmitter<void>();
  @Output() employeeUpdated = new EventEmitter<void>();

  employeeservice = inject(Employeeservice);

  isEditOpen = false;
  editData: any = {};


  updateEmployee(emp: any) {
    this.editData = { ...emp };   
    this.isEditOpen = true;
  }

  saveEmployee() {

  const id = this.editData.employeeId;

  const payload = {
    employeeName: this.editData.employeeName,
    employeeEmail: this.editData.employeeEmail,
    employeeDob: this.editData.employeeDob,
    employeeSalary: this.editData.employeeSalary
  };

  this.employeeservice.editEmployee(id, payload).subscribe({
    next: () => {
      console.log("Employee updated successfully");
      this.isEditOpen = false;
      this.employeeUpdated.emit();
    },
    error: (err) => {
      console.log("UPDATE ERROR:", err);
    }
  });
}
  // DELETE
  deleteEmployee(empid: any) {
    this.employeeservice.deleteEmployee(empid).subscribe({
      next: () => {
        console.log("Deleted successfully");
        this.employeeDeleted.emit();
      },
      error: (err) => {
        console.log("DELETE ERROR:", err);
      }
    });
  }
}