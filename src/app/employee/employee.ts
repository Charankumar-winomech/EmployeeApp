import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { Employeelist } from './employeelist/employeelist';
import { Employeeservice } from '../services/Employeeserivces/employeeservice';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [
    FormsModule,
    MatIconModule,
    MatExpansionModule,
    Employeelist
  ],
  templateUrl: './employee.html',
  styleUrl: './employee.css',
})
export class Employee {

  userName: string | undefined;

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    this.userName = nav?.extras.state?.['Name'];
  }

  Employee = signal(true);
  ChangePassword = signal(false);

  service = inject(Employeeservice);
  route = inject(Router);

  old: string = '';
  new: string = '';

  Message = signal('');
  showMessage = signal(false);
  isSuccess = signal(false);

  showPassword1 = false;
  showPassword2 = false;

  togglePassword1() {
    this.showPassword1 = !this.showPassword1;
  }

  togglePassword2() {
    this.showPassword2 = !this.showPassword2;
  }

  EmployeeShow(val: boolean) {
    this.Employee.set(val);
    this.ChangePassword.set(false);
  }

  PasswordChange(val: boolean) {
    this.ChangePassword.set(val);
    this.Employee.set(false);
  }

  signOut() {
    localStorage.removeItem('user');
    localStorage.removeItem('accessToken');
    this.router.navigate(['/login']);
  }


  Change() {

    if (!this.old || !this.new) {
      this.Message.set('All fields are required');
      this.isSuccess.set(false);
      this.showMessage.set(true);
      return;
    }

    if (this.old === this.new) {
      this.Message.set('New password cannot be same as old password');
      this.isSuccess.set(false);
      this.showMessage.set(true);
      return;
    }

    if (this.new.length < 6) {
      this.Message.set('Password must be at least 6 characters');
      this.isSuccess.set(false);
      this.showMessage.set(true);
      return;
    }

    this.service.changePassword({
      newPassword: this.new,
      oldPassword: this.old,
    }).subscribe({

      next: (res: any) => {

        this.Message.set('Password changed successfully');
        this.isSuccess.set(true);
        this.showMessage.set(true);

        setTimeout(() => {

          this.showMessage.set(false);

          this.ChangePassword.set(false);
          this.Employee.set(true); 

        }, 2000);
      },

      error: (err) => {

        const message =
          err?.error?.message || err?.message || 'Unknown error';

        this.Message.set(message);
        this.isSuccess.set(false);
        this.showMessage.set(true);

        setTimeout(() => {
          this.showMessage.set(false);
        }, 3000);
      }

    });
  }
}