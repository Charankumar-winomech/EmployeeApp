import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { Employeelist } from './employeelist/employeelist';

@Component({
  selector: 'app-employee',
  imports: [FormsModule, RouterModule, MatIconModule, MatExpansionModule, Employeelist],
  standalone: true,
  templateUrl: './employee.html',
  styleUrl: './employee.css',
})
export class Employee {
  userName: string | undefined;

  constructor(private router: Router) {
    const Name = this.router.getCurrentNavigation();
    this.userName = Name?.extras.state?.['Name'];
  }

  signOut() {

  localStorage.removeItem('user');
  this.router.navigate(['/login']);

  }
}
