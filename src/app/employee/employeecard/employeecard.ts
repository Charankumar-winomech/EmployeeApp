import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-employee-card',
  imports: [],
  templateUrl: './employeecard.html',
  styleUrl: './employeecard.css',
})
export class EmployeeCard {
  @Input() name: string = '';
  @Input() id: string = '';
  @Input() salary: string = '';
  @Input() age: string = '';
}
