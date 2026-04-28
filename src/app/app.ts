import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Employee } from './employee/employee';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet,MatIconModule],
  template: `<router-outlet/>`,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('EmployeeApp');
  
}
