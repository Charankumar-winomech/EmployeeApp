import { Routes } from '@angular/router';
import { Employee } from './employee/employee';
import { Login } from './login/login';
import { SignUp } from './login/sign-up/sign-up';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: Login,
  },
  {
    path: 'signup',
    component: SignUp,
  },
  {
    path: 'employee',
    component: Employee,
    canActivate: [authGuard]
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];
