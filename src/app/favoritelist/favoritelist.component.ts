import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import { ComicService } from '../comic.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-favoritelist',
  templateUrl: './favoritelist.component.html',
  styleUrls: ['./favoritelist.component.scss'],
})
export class FavoritelistComponent implements OnInit {

  constructor(public route:ActivatedRoute, private cs:ComicService, private storage:Storage) { }
  comics = null;
  message = "";

  async ngOnInit() {
    await this.storage.create();
    var user_id = await this.storage.get("user_id");
    this.cs.selectComicByFavorite(user_id).subscribe(
      (data) => {
        if(data['result'] == 'success'){
          this.comics=data['data'];
          }else{
          this.message=data['result'];
        }
    });
  }

}
