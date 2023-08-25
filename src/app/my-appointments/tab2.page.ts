import { Component } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { ModalFilterComponent } from '../shared/components/modal-filter/modal-filter.component';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  user: any;
  constructor(
    private navCtrl: NavController,
    private modalController: ModalController,
    private storage: Storage
  ) {
    this.storage.create();

    this.storage.get('user').then((userData) => {
      this.user = userData;
    });
  }
  open() {
    this.navCtrl.navigateForward('tabs/tab2/detail-appointment');
  }
  async filter() {
    const modal = await this.modalController.create({
      component: ModalFilterComponent,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();
  }
}
