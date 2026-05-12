import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { catchError, throwError } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class Apiservice {
  private http = inject(HttpClient);
  private baseUrl = environment.employeeUrl;
  private SignInUrl = environment.RegisterUrl;
  private LoginUrl = environment.LoginUrl;
  private ChangeUrl = environment.ChangeUrl;

  getRequest() {
    return this.http.get(`${this.baseUrl}/employees`).pipe(
      catchError((error) => {
        return throwError(() => error);
      }),
    );
  }

  deleteRequest(id: any) {
    return this.http.delete(`${this.baseUrl}/delete/${id}`, { responseType: 'text' });
  }

  updateRequest(id:any,payload:any)
  {
     return this.http.patch(`${this.baseUrl}/update/${id}`,payload,{ responseType: 'text' });
  }


  postRequest(body: any) {
    return this.http.post(`${this.baseUrl}`, body).pipe(
      catchError((error) => {
        return throwError(() => error);
      }),
    );
  }

  // for login
  postSignIn(body: any) {
    return this.http.post(`${this.SignInUrl}`, body).pipe(
      catchError((error) => {
        return throwError(() => error);
      }),
    );
  }

  postLoginIn(body: any) {
    return this.http.post(`${this.LoginUrl}`, body).pipe(
      catchError((error) => {
        return throwError(() => error);
      }),
    );
  }

  postChange(body: any) {
    const token = localStorage.getItem('accessToken');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.post(this.ChangeUrl, body, { headers }).pipe(
      catchError((error) => {
        return throwError(() => error);
      }),
    );
  }
}
