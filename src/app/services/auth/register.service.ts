import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  url = 'http://localhost:8080/api/users';



  constructor(
    private http: HttpClient,
  ) { }

  check(): Observable<any> {
    return this.http.get<any>(`${this.url}/status`);
  }
}
