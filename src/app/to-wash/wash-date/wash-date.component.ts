import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-wash-date',
  templateUrl: './wash-date.component.html',
  styleUrls: ['./wash-date.component.scss'],
})
export class WashDateComponent implements OnInit {
  action = 'Finalizar';
  constructor(private navCtrl: NavController) {}

  ngOnInit() {}
  avance() {
    this.navCtrl.navigateForward('tabs/tab3/success-wash');
  }
}
