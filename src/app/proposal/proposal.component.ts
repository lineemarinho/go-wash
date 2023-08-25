import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-proposal',
  templateUrl: './proposal.component.html',
  styleUrls: ['./proposal.component.scss'],
})
export class ProposalComponent implements OnInit {
  action = 'Aceitar';
  constructor(private navCtrl: NavController) {}

  ngOnInit() {}
  open() {
    this.navCtrl.navigateForward('tabs/proposal/order');
  }
  assessment() {
    this.navCtrl.navigateForward('tabs/proposal/assessment');
  }
}
