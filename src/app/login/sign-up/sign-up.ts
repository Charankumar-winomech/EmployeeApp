import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Loginservices } from '../../services/Loginservice/loginservices';
import { Router } from '@angular/router';
import { MatIcon, MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sign-up',
  imports: [FormsModule, MatIconModule],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.css',
})
export class SignUp {
  name: string = '';
  email: string = '';
  dob: string = '';
  pass: string = '';

  showPassword = false;
  togglePassword() {
    this.showPassword = !this.showPassword;
  }
  signIn = inject(Loginservices);
  router = inject(Router);

  Message = signal('');
  showError = signal(false);
  isSuccess = signal(false);

  onSubmit(form:any) {
    form.control.markAllAsTouched();

  if (form.invalid) {
    return; 
  }
    
    if (!this.name || !this.email || !this.dob || !this.pass) {
      this.Message.set('All fields are required');
      this.showError.set(true);
      this.isSuccess.set(false);

      setTimeout(() => {
        this.showError.set(false);
      }, 3000);

      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(this.email)) {
      this.Message.set('Enter a valid email address');
      this.showError.set(true);
      this.isSuccess.set(false);

      setTimeout(() => {
        this.showError.set(false);
      }, 3000);

      return;
    }

    if (this.pass.length < 6) {
      this.Message.set('Password must be at least 6 characters');
      this.showError.set(true);
      this.isSuccess.set(false);

      setTimeout(() => {
        this.showError.set(false);
      }, 3000);

      return;
    }

    

    this.signIn
      .addUser({
        "userEmail": this.email,
        "password": this.pass,
        "dob": this.dob,
        "userName": this.name,
      })
      .subscribe({
        next: (res: any) => {
          console.log('user Added Successfully', res);

          if (res.success) {
            this.router.navigate(['login'], {
              state: {
                message: res.message,
                success: true,
              },
            });
          }
        },

        error: (err) => {
          // const status = err?.status;
          const message = err?.error?.message || err?.message || 'Unknown error';

          this.Message.set(`Error ${message}`);

          this.showError.set(true);
          this.isSuccess.set(false);

          setTimeout(() => {
            this.showError.set(false);
          }, 4000);
        },
      });
  }
}
