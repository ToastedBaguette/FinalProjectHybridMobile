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
  name = "";

  login_user="";
  login_passwd="";
  login_error="";

  constructor(private us: UserService, private storage:Storage) {}

  login(){
    this.us.checklogin(this.login_user,this.login_passwd).subscribe(
      (data) => {
        if(data['result'] == 'success'){
          this.user_id=data['data']['iduser'];
          this.name = data['data']['nama'];
          this.storage.set('user_id',this.user_id);
          this.storage.set('name',this.name);

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
    this.name = await this.storage.get("name");
  }
}
