import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import { ComicService } from '../comic.service';
import { Storage } from '@ionic/storage-angular';
import { AlertController, BooleanValueAccessor } from '@ionic/angular';


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

    this.cs.addComment(this.id_komik).subscribe()

    
  }

  async addFavorite(){
    var id_user = await this.storage.get("user_id");
    var favorite = null;

    await this.cs.addFavorite(this.id_komik, id_user).subscribe(
      (data) => {
        if(data["result"] == "success"){
          favorite = true;
        }else{
          favorite = false;
        }    
      });

    var alert = await this.alertController.create({
      header: "Comic added to favorite",
      buttons: ['OK'],
    });

    if(!favorite){
      alert = await this.alertController.create({
        header: 'You already added this comic to favorite',
        buttons: ['OK'],
      });
    }

    await alert.present();  
  }

  async rate() {

    var id_user = await this.storage.get("user_id");
    var rateOk = null;

    this.cs.insertRate(id_user, this.id_komik, this.rating_value).subscribe(
      (data) => {
        if(data['result'] == 'success'){
          rateOk = true;
        }else{
          rateOk = false;
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
