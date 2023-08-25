import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { OrderService } from '../shared/services/order.service';
import { AuthService } from '../shared/services/user.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  action = 'Avançar';
  user: any;
  listType: any;
  listAdditional: any;
  listVehicles: any;
  vehicles: any;
  constructor(
    private navCtrl: NavController,
    private orderService: OrderService,
    private storage: Storage,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.storage.create();

    this.storage.get('user').then((userData) => {
      this.user = userData;
    });

    setTimeout(() => {
      this.orderService.listType(this.user).subscribe(
        (response: any) => {
          this.listType = response.data;
        },
        (error) => {
          console.error('error', error);
        }
      );
      this.orderService.listAdditional(this.user).subscribe(
        (response: any) => {
          this.listAdditional = response.data;
          console.log(response, 'listAdditional');
        },
        (error) => {
          console.error('error', error);
        }
      );
      this.authService.allVehicles().subscribe(
        (response) => {
          this.listVehicles = response;
          this.vehicles = this.listVehicles.data;
        },
        (error) => {
          console.error('Erro ao buscar detalhes do usuário:', error);
        }
      );
    }, 200);
  }
  avance() {
    this.navCtrl.navigateForward('tabs/tab3/wash-date');
  }
}
