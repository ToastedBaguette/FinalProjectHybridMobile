import { Component } from '@angular/core';
import { UserService } from './user.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  user_id="";

  login_user="";
  login_passwd="";
  login_error="";

  public appPages = [
    { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(private us: UserService, private storage:Storage) {}

  login(){
    this.us.checklogin(this.login_user,this.login_passwd).subscribe(
      (data) => {
        if(data['result'] == 'success'){
          this.user_id=data['data']['iduser'];
          this.storage.set('user_id',this.user_id);
        }else{
          this.login_error=data['message'];
        }
    });
  };

  async logout()
  {
    this.user_id = "";
    await this.storage.remove('user_id');
  }
  
  async ngOnInit(){
    await this.storage.create();
    this.user_id = await this.storage.get("user_id");
  }
}
