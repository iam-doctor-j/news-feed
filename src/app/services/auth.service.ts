import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

interface AuthResposnse {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    this.http
      .post<AuthResposnse>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' +
          environment.firebase.apiKey,
        {
          email: email,
          password: password,
          returnSecureToken: true
        }
      )
      .subscribe(res => console.log(res));
  }

  signup(email: string, password: string) {
    this.http
      .post<AuthResposnse>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' +
          environment.firebase.apiKey,
        {
          email: email,
          password: password,
          returnSecureToken: true
        }
      )
      .subscribe(res => {
        console.log(res);
      });
  }
}
