import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/shared/services/user.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  action = 'Acessar';
  email: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private navCtrl: NavController,
    private toastController: ToastController
  ) {}

  login(email: string, password: string) {
    this.authService.login(email, password).subscribe(
      (response) => {
        console.log(response, 'useruseruseruseruseruseruseruseruseruseruser');
        this.navCtrl.navigateForward([
          'tabs/tab1',
          { response: JSON.stringify(response) },
        ]);
      },
      async (error) => {
        const toast = await this.toastController.create({
          message: error.error.error,
          duration: 2000, // Duração em milissegundos
          position: 'bottom', // Posição do toast na tela (top, middle, bottom)
        });

        toast.present();
      }
    );
  }

  navigation(page: string) {
    console.log(page);
    this.navCtrl.navigateForward([page]);
  }
}
