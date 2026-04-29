import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class Apiservice {

  private baseUrl=environment.apiUrl;
  private http=inject(HttpClient);



  getRequest<T>(url:string)
  {
    return this.http.get<T>(`${this.baseUrl}${url}`);
  }

  postRequest<T>(url:string,body:any)
  {
    return this.http.post(`${this.baseUrl}${url}`,body)
  }


}
