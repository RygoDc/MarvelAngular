import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginUser } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = 'http://localhost:8080/api/users';

  constructor(
    private http: HttpClient,
  ) { }

  login(credenciales: LoginUser): Observable<any> {
    return this.http.post(this.url+'/login',credenciales); 
  }

  loginV2(credenciales: LoginUser): Observable<any> {
    return this.http.post(this.url+'/login/v2',credenciales); 
  }

  setUser(dato : LoginUser): void {
    sessionStorage.setItem('user', JSON.stringify(dato));
  }

  getUser(): LoginUser | null {
    const user = JSON.parse(<string> sessionStorage.getItem('user'));
    return user ? user : null;
  }

  deleteUser(): void {
    const user = JSON.parse(<string> sessionStorage.getItem('user'));
    if (user) {
      sessionStorage.removeItem('user');
    }
  }
}
