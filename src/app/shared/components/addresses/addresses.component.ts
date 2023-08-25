import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../../services/user.service';
import { NavController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.scss'],
})
export class AddressesComponent implements OnInit {
  @Input() edit = false;
  @Input() address: any;
  user: any;
  listAddress: any;
  constructor(
    private navCtrl: NavController,
    private authService: AuthService,
    private storage: Storage,
    private router: Router,
    private toastController: ToastController
  ) {}

  ngOnInit() {}

  editAdd(item: any) {
    this.navCtrl.navigateForward([
      '/tabs/profile/add-addresses',
      { item: JSON.stringify(item) },
    ]);
  }
  deleteAdd(item: any) {
    this.authService.delete(item.id).subscribe(
      async (response: any) => {
        console.log(response);
        this.address = this.address.filter(
          (address: any) => address.id !== item.id
        );
        const toast = await this.toastController.create({
          message: 'Endereço deletado com sucesso! :)',
          duration: 2000,
          position: 'top',
        });

        toast.present();
      },
      (error) => {
        console.error('Erro na consulta do CEP', error);
      }
    );
  }
}
