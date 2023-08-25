import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { ModalFilterComponent } from '../shared/components/modal-filter/modal-filter.component';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-historic',
  templateUrl: './historic.component.html',
  styleUrls: ['./historic.component.scss'],
})
export class HistoricComponent implements OnInit {
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

  ngOnInit() {}
  open() {
    this.navCtrl.navigateForward('tabs/historic/detail-historic');
  }
  async filter() {
    const modal = await this.modalController.create({
      component: ModalFilterComponent,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();
  }
}
