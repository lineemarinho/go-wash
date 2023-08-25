import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  action = 'Meus agendamentos';
  constructor(private navCtrl: NavController) {}

  ngOnInit() {}

  goCalendar() {
    this.navCtrl.navigateForward('/tabs/tab2');
  }
}
