import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  webservice = "https://ubaya.fun/hybrid/160420041/comic_api/"

  constructor(private http: HttpClient) { }

  checklogin(username:string, password:string):Observable<any> {
    let body = new HttpParams();
    body = body.set('username', username);
    body = body.set('user_password', password);
    return this.http.post(this.webservice + "login.php", body);  }
}
