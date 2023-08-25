import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  user: any;
  constructor(
    private menu: MenuController,
    private navCtrl: NavController,
    private storage: Storage
  ) {}

  ngOnInit() {
    this.storage.create();

    this.storage.get('user').then((userData) => {
      this.user = userData;
      console.log(this.user);
    });
  }
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

  avance() {
    this.navCtrl.navigateForward('tabs/proposal');
  }

  openMenu() {
    this.navCtrl.navigateForward('tabs/profile');
  }

  login() {
    this.navCtrl.navigateForward(['/tabs/access-page']);
  }
}
