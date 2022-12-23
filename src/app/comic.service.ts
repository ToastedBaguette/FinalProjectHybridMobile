import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComicService {
  webservice = "https://ubaya.fun/hybrid/160420041/comic_api/"

  constructor(private http: HttpClient) { }

  selectComicByCategory(id_kategori:number):Observable<any> {
    let body = new HttpParams();
    body = body.set('id_kategori', id_kategori);
    return this.http.post(this.webservice + "daftarkomikbykategori.php", body);  }
}
