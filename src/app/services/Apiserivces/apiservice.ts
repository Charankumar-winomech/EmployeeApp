import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Apiservice {
  
  private baseUrl = environment.apiUrl;
  private http = inject(HttpClient);
  private SignInUrl=environment.RegisterUrl;
  private LoginUrl=environment.LoginUrl;

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


}
