import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Loginservices } from '../services/Loginservice/loginservices';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, MatIconModule,NgIf],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  Login = inject(Loginservices);

  constructor(private router: Router) {
    const nav = history.state;

    if (nav?.message) {
      this.Message.set(nav.message);
      this.isSuccess.set(nav.success);
      this.showMessage.set(true);
      history.replaceState({}, '');
      setTimeout(() => this.showMessage.set(false), 4000);
    }
  }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(4)])
  });

  Message = signal('');
  showMessage = signal(false);
  isSuccess = signal(false);

  showPassword = false;

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  check() {

    this.loginForm.markAllAsTouched();

    if (this.loginForm.invalid) {
      this.Message.set('Please enter valid email and password');
      this.isSuccess.set(false);
      this.showMessage.set(true);
      setTimeout(() => this.showMessage.set(false), 3000);
      return;
    }

    const { email, password } = this.loginForm.value;

    this.Login.CheckUser({
      userEmail: email!,
      password: password!
    }).subscribe({
      next: (res: any) => {

        if (!res?.success) {
          this.Message.set('Invalid credentials');
          this.isSuccess.set(false);
          this.showMessage.set(true);
          return;
        }

        localStorage.setItem('accessToken', res.data.token);
        localStorage.setItem('user', JSON.stringify(res.data));

        this.router.navigate(['/employee'], {
          state: { Name: res.data.userName }
        });
      },

      error: (err) => {
        const message = err?.error?.message || 'Unknown error';

        this.Message.set(message);
        this.isSuccess.set(false);
        this.showMessage.set(true);
        setTimeout(() => this.showMessage.set(false), 3000);
      }
    });
  }

  SignUp() {
    this.router.navigate(['signup']);
  }
}