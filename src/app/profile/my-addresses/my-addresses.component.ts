import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/shared/services/user.service';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-my-addresses',
  templateUrl: './my-addresses.component.html',
  styleUrls: ['./my-addresses.component.scss'],
})
export class MyAddressesComponent implements OnInit {
  edit = true;
  action = 'Adicionar endereço';
  address: any;
  user: any;
  listAddress: any;
  constructor(
    private navCtrl: NavController,
    private authService: AuthService,
    private storage: Storage
  ) {}

  ngOnInit() {
    this.updateAddressesComponent();
  }
  addAddresses() {
    this.navCtrl.navigateForward('tabs/profile/add-addresses');
  }
  updateAddressesComponent() {
    this.storage.create();

    this.storage.get('user').then((userData) => {
      this.user = userData;
    });
    setTimeout(() => {
      this.authService.allAddress().subscribe(
        (response) => {
          this.listAddress = response;
          this.address = this.listAddress.data;
          console.log(this.address);
        },
        (error) => {
          console.error('Erro ao buscar detalhes do usuário:', error);
        }
      );
    }, 200);
  }
}
