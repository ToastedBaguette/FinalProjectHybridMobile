import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import { ComicService } from '../comic.service';


@Component({
  selector: 'app-comiclist',
  templateUrl: './comiclist.component.html',
  styleUrls: ['./comiclist.component.scss'],
})

export class ComiclistComponent implements OnInit {

  constructor(public route:ActivatedRoute, private cs:ComicService) { }
  comics = null;
  message = "";

  ngOnInit() {
    var id:number=this.route.snapshot.params['id'];
    this.cs.selectComicByCategory(id).subscribe(
      (data) => {
        if(data['result'] == 'success'){
          this.comics=data['data'];
          }else{
          this.message=data['result'];
        }
    });
  }

}
