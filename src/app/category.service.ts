import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  webservice = "https://ubaya.fun/hybrid/160420041/comic_api/"

  constructor(private http: HttpClient) { }

  selectCategory():Observable<any> {
    let body = new HttpParams();
    return this.http.post(this.webservice + "kategori.php", body);  }
}
