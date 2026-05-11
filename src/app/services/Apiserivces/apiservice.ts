import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { catchError, throwError } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class Apiservice {
  
  private baseUrl = environment.employeeUrl;
  private http = inject(HttpClient);
  private SignInUrl=environment.RegisterUrl;
  private LoginUrl=environment.LoginUrl;
  private ChangeUrl=environment.ChangeUrl;
  getRequest<T>(url: string) {
    return this.http.get<T>(`${this.baseUrl}${url}`).pipe(
      catchError((error) => {
        return throwError(() => error);
      }),
    );
  }

  postRequest(url: string, body: any) {
    return this.http.post(`${this.baseUrl}${url}`, body).pipe(
      catchError((error) => {
        return throwError(() => error);
      }),
    );
  }

  
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
    Authorization: `Bearer ${token}`
  });

  return this.http.post(
    this.ChangeUrl,
    body,
    { headers }
  ).pipe(
    catchError((error) => {
      return throwError(() => error);
    })
  );
}

}
