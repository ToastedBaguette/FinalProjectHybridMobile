import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import { ComicService } from '../comic.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-replycomic',
  templateUrl: './replycomic.component.html',
  styleUrls: ['./replycomic.component.scss'],
})
export class ReplycomicComponent implements OnInit {

  constructor(public route:ActivatedRoute,  private cs:ComicService, public storage:Storage) { }
  comments = null;
  replycomments = null;
  message = "";
  comment = "";
  id_komentar:number=this.route.snapshot.params['id_komentar'];
  id_komik:number=this.route.snapshot.params['id_komik'];
  
  async ngOnInit() {
    this.cs.readSelectedReply(this.id_komentar).subscribe(
      (data) => {
        if(data['result'] == 'success'){
          this.comments=data['data'];
          }else{
          this.message=data['result'];
          this.comments=data['data'];
        }
    });

    this.cs.readReply(this.id_komentar).subscribe(
      (data) => {
        if(data['result'] == 'success'){
          this.replycomments=data['data'];
          }else{
          this.message=data['result'];
          this.replycomments=data['data'];
        }
    });
  }

  async writeReply(){
    var id_user = await this.storage.get("user_id");
    this.cs.insertReply(id_user, this.id_komik , this.comment, this.id_komentar).subscribe(
      (data) => {
        if(data['result'] == 'success'){
          this.replycomments=data['data'];
          }else{
          this.message=data['result'];
          this.replycomments=data['data'];
        }
    });
  }

}
