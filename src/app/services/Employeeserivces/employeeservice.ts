import { inject, Injectable } from '@angular/core';
import { Apiservice } from '../Apiserivces/apiservice';
import { Employee } from '../../model/Employee';
@Injectable({
  providedIn: 'root',
})
export class Employeeservice {
  private api = inject(Apiservice);
    
  getEmployees() {
    return this.api.getRequest();
  }

  addEmployees(employee: any) {
    console.log(employee);
    return this.api.postRequest(employee);
  }
  deleteEmployee(id:any)
  {
    return this.api.deleteRequest(id);
  }
  editEmployee(id:any,payload:any)
  {
    return this.api.updateRequest(id,payload);
  }
  changePassword(newPassword:any)
  {
    return this.api.postChange(newPassword);
  }



}
