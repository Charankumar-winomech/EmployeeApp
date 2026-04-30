import { Routes } from '@angular/router';
import { Employee } from './employee/employee';
import { Login } from './login/login';

export const routes: Routes = [
{
    path:'',
    pathMatch:'full',
    component:Login
},
{
    path:'employee',
    component:Employee
}
];
