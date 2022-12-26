import { Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import { ComicService } from '../comic.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class SearchComponent implements OnInit {
  comics = null;
  message = "";
  find_komik:string = "";

  constructor(public route:ActivatedRoute, private cs:ComicService) { }

  ngOnInit() {
    this.cs.findComic(this.find_komik).subscribe(
      (data) => {
        if(data['result'] == 'success'){
          this.comics=data['data'];
          }else{
          this.message=data['result'];
        }
    });
  }

  findComic() {
    this.cs.findComic(this.find_komik).subscribe(
      (data) => {
        if(data['result'] == 'success'){
          this.comics = null;
          this.comics=data['data'];
          }else{
          this.message=data['result'];
        }
    });
  }

}
