import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { MyDataComponent } from './my-data/my-data.component';
import { Storage } from '@ionic/storage-angular';
import { AuthService } from '../shared/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  component = MyDataComponent;
  user: any;
  constructor(
    private navCtrl: NavController,
    private storage: Storage,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.storage.create();

    this.storage.get('user').then((userData) => {
      this.user = userData;
      if (!this.user) {
        this.navCtrl.navigateForward(['/tabs/access-page']);
      }
    });
  }

  navigation(page: string) {
    if (page === '/tabs/access-page') {
      this.storage.clear().then(() => {
        this.navCtrl.navigateForward([page]);
      });
    }
    this.navCtrl.navigateForward([page]);
  }
  loggout() {
    this.authService.logout().subscribe(
      (response) => {
        console.log(response);
        this.navCtrl.navigateRoot(['/tabs/access-page']);
        this.storage.remove('user');
      },
      (error) => {
        console.error('Erro ao buscar detalhes do usuário:', error);
      }
    );
  }
}
