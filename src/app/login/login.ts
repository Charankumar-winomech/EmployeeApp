import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Loginservices } from '../services/Loginservice/loginservices';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-login',
  imports: [FormsModule, MatIconModule],
  standalone: true,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  userEmail: string = '';
  passWord: string = '';


  Message = signal('');
  showMessage = signal(false);
  isSuccess = signal(false);

  Login = inject(Loginservices);

  constructor(private router: Router) {
    const nav = history.state;

    if (nav?.message) {
      this.Message.set(nav.message);
      this.isSuccess.set(nav.success);
      this.showMessage.set(true);
      history.replaceState({}, '');
      setTimeout(() => {
        this.showMessage.set(false);
      }, 4000);
    }
  }
  showPassword = false;
  togglePassword() {
    this.showPassword = !this.showPassword;
  }
  check() {
    if (!this.userEmail || !this.passWord) {
      this.Message.set('Username and password are required');
      this.isSuccess.set(false);
      this.showMessage.set(true);

      setTimeout(() => {
        this.showMessage.set(false);
      }, 3000);

      return;
    }
    if (this.passWord.length < 4) {
      this.Message.set('Password must be at least 4 characters');
      this.isSuccess.set(false);
      this.showMessage.set(true);

      setTimeout(() => {
        this.showMessage.set(false);
      }, 3000);

      return;
    }
    this.Login.CheckUser({
      "password": this.passWord,
      "userEmail": this.userEmail,
    }).subscribe({
      next: (res: any) => {
        console.log('login response', res);

        if (!res?.success) {
          this.Message.set('Invalid credentials');
          this.isSuccess.set(false);
          this.showMessage.set(true);
          return;
        }

        localStorage.setItem('accessToken', res.data.token);
        localStorage.setItem('user', JSON.stringify(res.data));

        this.router.navigate(['/employee'], {
          state: {
            Name: res.data.userName,
          },
        });

        console.log(localStorage.getItem('accessToken'))
      },

      error: (err) => {
        const status = err?.status;
        const message = err?.error?.message || err?.message || 'Unknown error';

        this.Message.set(`Error ${status}: ${message}`);
        this.isSuccess.set(false);
        this.showMessage.set(true);

        setTimeout(() => {
          this.showMessage.set(false);
        }, 3000);
      },
    });
  }
  SignUp() {
    this.router.navigate(['signup']);
  }
}
