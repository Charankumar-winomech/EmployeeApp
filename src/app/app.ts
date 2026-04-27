import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Employee } from './employee/employee';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Login,Employee,RouterLink],
  template: `<router-outlet/>`,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('EmployeeApp');
  
}
