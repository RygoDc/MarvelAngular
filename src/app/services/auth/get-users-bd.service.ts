import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetUsersBdService {
  url = 'http://localhost:8080/api/users';

  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable<any> { 
    return this.http.get(this.url);
  }  

}
