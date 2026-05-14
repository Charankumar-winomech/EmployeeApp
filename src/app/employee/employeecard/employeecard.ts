import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { Employeeservice } from '../../services/Employeeserivces/employeeservice';
import { DialogBox } from '../employeelist/dialog-box/dialog-box';

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

  constructor(private dialog: MatDialog) {}

  updateEmployee(emp: any) {
    const dialogRef = this.dialog.open(DialogBox, {
      width: '500px',
      data: emp  
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const payload = {
          employeeName: result.name,
          employeeEmail: result.mail,
          employeeDob: result.dob,
          employeeSalary: result.salary
        };

        this.employeeservice.editEmployee(emp.employeeId, payload)
          .subscribe({
            next: () => {
              console.log("Employee updated successfully");
              this.employeeUpdated.emit();
            },
            error: (err) => {
              console.log("UPDATE ERROR:", err);
            }
          });
      }
    });
  }

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