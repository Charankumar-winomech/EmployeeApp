
import { inject, Injectable } from '@angular/core';
import { Apiservice } from '../Apiserivces/apiservice';

@Injectable({
  providedIn: 'root',
})
export class Loginservices {

 private api = inject(Apiservice);

  addUser(user:any) {
     console.log(user);
     return this.api.postSignIn(user);
  }

  CheckUser(details:any)
  {
    return this.api.postLoginIn(details);
  }
  

}
