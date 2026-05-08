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
  role: string = '';
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

  onSubmit() {
    this.signIn
      .addUser({
        email: this.email,
        password: this.pass,
        role: this.role.toUpperCase(),
        username: this.name,
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
          console.log('POST API ERROR:', err);

          const status = err?.status;
          const message = err?.error?.message || err?.message || 'Unknown error';

          this.Message.set(`Error ${status}: ${message}`);

          this.showError.set(true);
          this.isSuccess.set(false);

          setTimeout(() => {
            this.showError.set(false);
          }, 4000);
        },
      });
  }
}
