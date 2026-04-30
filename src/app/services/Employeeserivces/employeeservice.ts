import { inject, Injectable } from '@angular/core';
import { Apiservice } from '../Apiserivces/apiservice';
import { Employee } from '../../model/Employee';
@Injectable({
  providedIn: 'root',
})
export class Employeeservice {
  private api = inject(Apiservice);
  getEmployees() {
    return this.api.getRequest<Employee[]>(`employees`);
  }
  addEmployees(employee: Employee) {
    console.log(employee);
    return this.api.postRequest('create', employee);
  }
}
