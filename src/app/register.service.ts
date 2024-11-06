import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

interface RegisterResponse {
  name: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private apiRegister = 'https://nesttest-19r2.onrender.com/auth/register';

  constructor(private http: HttpClient) {}

  register(credentials: {
    name: string;
    email: string;
    password: string;
  }): Observable<RegisterResponse> {
    console.log(credentials);

    return this.http.post<RegisterResponse>(this.apiRegister, credentials);
  }
}
