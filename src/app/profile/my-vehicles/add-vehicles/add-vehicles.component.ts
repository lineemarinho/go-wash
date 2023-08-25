import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-add-vehicles',
  templateUrl: './add-vehicles.component.html',
  styleUrls: ['./add-vehicles.component.scss'],
})
export class AddVehiclesComponent implements OnInit {
  action = 'Cadastrar';
  typeCar: any;
  vehicles = {
    id: '',
    type: '',
    brand: '',
    model: '',
    year: '',
    color: '',
  };
  constructor(
    private navCtrl: NavController,
    private authService: AuthService,
    private route: ActivatedRoute,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    const encodedItem = this.route.snapshot.paramMap.get('item');

    if (encodedItem !== null) {
      this.vehicles = JSON.parse(encodedItem);

      this.vehicles = {
        id: this.vehicles.id,
        type: this.vehicles.type,
        brand: this.vehicles.brand,
        model: this.vehicles.model,
        year: this.vehicles.year,
        color: this.vehicles.color,
      };
    }
  }
  addAddresses() {
    this.navCtrl.navigateForward('tabs/profile/add-vehicles');
  }

  selectVehicleType(type: any) {
    this.typeCar = type;
    this.vehicles.type = this.typeCar;
  }
  submitForm() {
    this.authService.upVehicle(this.vehicles).subscribe(
      async (response) => {
        const toast = await this.toastController.create({
          message: 'Veiculo cadastrado com sucesso! :)',
          duration: 2000,
          position: 'top',
        });

        toast.present();
        this.navCtrl.navigateForward('tabs/profile/vehicles');
      },
      async (error) => {
        const toast = await this.toastController.create({
          message: 'Erro ao cadastrar o veiculo, tente novamente! :)',
          duration: 2000,
          position: 'top',
        });

        toast.present();
      }
    );
  }
  edit() {
    this.authService.upVehicle(this.vehicles).subscribe(
      async (response) => {
        const toast = await this.toastController.create({
          message: 'Veiculo cadastrado com sucesso! :)',
          duration: 2000,
          position: 'top',
        });

        toast.present();
        this.navCtrl.navigateForward('tabs/profile/vehicles');
      },
      async (error) => {
        const toast = await this.toastController.create({
          message: 'Erro ao cadastrar o veiculo, tente novamente! :)',
          duration: 2000,
          position: 'top',
        });

        toast.present();
      }
    );
  }
}
