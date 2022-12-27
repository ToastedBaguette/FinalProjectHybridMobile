import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import { ComicService } from '../comic.service';
import { Storage } from '@ionic/storage-angular';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-readcomic',
  templateUrl: './readcomic.component.html',
  styleUrls: ['./readcomic.component.scss'],
})
export class ReadcomicComponent implements OnInit {

  constructor(public route:ActivatedRoute, private cs:ComicService, public storage:Storage, private alertController: AlertController) { }
  comics = null;
  comments = null;
  message = "";
  comment:string ="";
  id_komik:number=this.route.snapshot.params['id'];
  rating_value = 0.0;

  ngOnInit() {
    this.cs.readComic(this.id_komik).subscribe(
      (data) => {
        if(data['result'] == 'success'){
          this.comics=data['data'];
          }else{
          this.message=data['result'];
        }
    });

    this.cs.countView(this.id_komik).subscribe()


    this.cs.readComment(this.id_komik).subscribe(
      (data) => {
        if(data['result'] == 'success'){
          this.comments=data['data'];
          }else{
          this.message=data['result'];
          this.comments=data['data'];
        }
    });
  }

  async writeComment(){
    var id_user = await this.storage.get("user_id");
    this.cs.writeComment(id_user, this.id_komik, this.comment).subscribe(
      (data) => {
        if(data['result'] == 'success'){
          this.comments=data['data'];
          }else{
          this.message=data['result'];
          this.comments=data['data'];
        }
    });  
  }

  async rate() {

    var id_user = await this.storage.get("user_id");
    var rateOk = false;

    this.cs.insertRate(id_user, this.id_komik, this.rating_value).subscribe(
      (data) => {
        if(data['result'] == 'success'){
            rateOk = true;
          }
    });  

    var alert = await this.alertController.create({
      header: 'Rating Success',
      buttons: ['OK'],
    });

    if(!rateOk){
      alert = await this.alertController.create({
        header: 'You Already Rate this Comic',
        buttons: ['OK'],
      });
    }

    await alert.present();
  }
}
