import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import { ComicService } from '../comic.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor(public route:ActivatedRoute, private cs:ComicService) { }
  comics = null;

  ngOnInit() {
    this.cs.selectComicByPopularity().subscribe(
      (data) => {
        if(data['result'] == 'success'){
          this.comics=data['data'];
          }else{
          this.comics=data['data'];
        }
    });
  }

}
