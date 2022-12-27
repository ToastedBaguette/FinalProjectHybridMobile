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

  selectComicByFavorite(id_user:number):Observable<any> {
    let body = new HttpParams();
    body = body.set('id_user', id_user);
    return this.http.post(this.webservice + "daftarkomikbyfavorit.php", body);  }
    
  findComic(cari_komik:string):Observable<any> {
    let body = new HttpParams();
    body = body.set('cari', cari_komik);
    return this.http.post(this.webservice + "carikomik.php", body);  }

  readComic(id_komik:number):Observable<any> {
    let body = new HttpParams();
    body = body.set('id_komik', id_komik);
    return this.http.post(this.webservice + "bacakomik.php", body);  }

  readComment(id_komik:number):Observable<any> {
    let body = new HttpParams();
    body = body.set('id_komik', id_komik);
    return this.http.post(this.webservice + "bacakomentar.php", body);  }
  
  writeComment(id_user:number, id_komik:number, komentar:string):Observable<any> {
    let body = new HttpParams();
    body = body.set('id_user', id_user);
    body = body.set('id_komik', id_komik);
    body = body.set('komentar', komentar);
    return this.http.post(this.webservice + "insertkomentar.php", body);  }

  insertRate(id_user:number, id_komik:number, value:number):Observable<any> {
    let body = new HttpParams();
    body = body.set('id_user', id_user);
    body = body.set('id_komik', id_komik);
    body = body.set('value', value);
    return this.http.post(this.webservice + "insertrating.php", body);  }
}
