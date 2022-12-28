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

  selectComicByPopularity():Observable<any> {
    let body = new HttpParams();
    return this.http.post(this.webservice + "daftarkomikbypopularity.php", body);  }
    
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

  readSelectedReply(id_komentar:number):Observable<any> {
    let body = new HttpParams();
    body = body.set('id_reply', id_komentar);
    return this.http.post(this.webservice + "bacabalasankomentarterpilih.php", body); 
  }

  readReply(id_komentar:number):Observable<any> {
    let body = new HttpParams();
    body = body.set('id_reply', id_komentar);
    return this.http.post(this.webservice + "bacabalasankomentar.php", body); 
  }

  insertReply(id_user:number, id_komik:number, komentar:string, id_reply:number):Observable<any> {
    let body = new HttpParams();
    body = body.set('id_user', id_user);
    body = body.set('id_komik', id_komik);
    body = body.set('komentar', komentar);
    body = body.set('id_reply', id_reply);
    return this.http.post(this.webservice + "insertkomentarbalasan.php", body);  }

  countView(comic_id:number):Observable<any> {
    let body = new HttpParams();
    body = body.set('id_komik', comic_id);
    return this.http.post(this.webservice + "lihatview.php", body);  }

  addComment(comic_id:number):Observable<any> {
    let body = new HttpParams();
    body = body.set('id_komik', comic_id);
    return this.http.post(this.webservice + "lihatkomentar.php", body);  }

  addFavorite(comic_id:number, user_id:number):Observable<any> {
    let body = new HttpParams();
    body = body.set('id_komik', comic_id);
    body = body.set('id_user', user_id);
    return this.http.post(this.webservice + "tambahfavorit.php", body);  }
  
}
