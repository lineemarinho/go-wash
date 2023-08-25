import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-historical-detail',
  templateUrl: './historical-detail.component.html',
  styleUrls: ['./historical-detail.component.scss'],
})
export class HistoricalDetailComponent implements OnInit {
  action = 'Avaliar serviço';
  constructor(private navCtrl: NavController) {}

  ngOnInit() {}
  open() {
    this.navCtrl.navigateForward('tabs/historic/assess');
  }
}
