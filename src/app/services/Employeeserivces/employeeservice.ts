import { inject, Injectable } from '@angular/core';
import { Apiservice } from '../Apiserivces/apiservice';
import { Employee } from '../../model/Employee';
@Injectable({
  providedIn: 'root',
})
export class Employeeservice {
    
  private api=inject(Apiservice);


  getEmployees(url:string)
  {
    return this.api.getRequest<Employee[]>(url);
  }

  addEmployees(employee:Employee,url:string,)
  {
    return this.api.postRequest(url,employee);
  }




}
