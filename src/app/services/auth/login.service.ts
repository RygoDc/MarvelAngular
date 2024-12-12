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
    return this.http.post(this.url+'/login',credenciales,{
      headers: {
        'Content-Type': 'application/json'
      }
    }); 
  }

  loginV2(credenciales: LoginUser): Observable<any> {
    return this.http.post(this.url+'/login/v2',credenciales,{
      headers: {
        'Content-Type': 'application/json'
      }
    }); 
  }
  
}
