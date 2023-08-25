import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../../services/user.service';
import { Storage } from '@ionic/storage-angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss'],
})
export class VehiclesComponent implements OnInit {
  @Input() edit = false;
  user: any;
  @Input() public vehicles: any;
  listVehicles: any;
  constructor(
    private authService: AuthService,
    private storage: Storage,
    private navCtrl: NavController
  ) {}

  ngOnInit() {}
  editAdd(item: any) {
    this.navCtrl.navigateForward([
      '/tabs/profile/add-vehicles',
      { item: JSON.stringify(item) },
    ]);
  }
}
