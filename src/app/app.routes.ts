import { Routes } from '@angular/router';
import { Employee } from './employee/employee';
import { Login } from './login/login';
import { EmployeeApi } from './employee/employee-api/employee-api';

export const routes: Routes = [


{
    path:'',
    pathMatch:'full',
    component:Login
},
{
    path:'employee',
    component:Employee
},
{
    path:'employeeApi',
    component:EmployeeApi
}

];
