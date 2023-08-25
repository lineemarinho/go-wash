import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {
  action = 'Alterar senha';
  current_password: string = '';
  password: string = '';
  password_confirmation: string = '';
  error: any;
  constructor(
    private authService: AuthService,
    private toastController: ToastController,
    private navCtrl: NavController
  ) {}

  ngOnInit() {}
  changePassword() {
    const requestData = {
      current_password: this.current_password,
      password: this.password,
      password_confirmation: this.password_confirmation,
    };

    this.authService.upPassword(requestData).subscribe(
      async (response) => {
        const toast = await this.toastController.create({
          message: 'Senha alterada com sucesso! :)',
          duration: 2000,
          position: 'top',
        });

        toast.present();
        this.dados();
      },
      async (error) => {
        let errorMessage = '';

        if (
          error &&
          error.error &&
          error.error.data &&
          error.error.data.password
        ) {
          errorMessage = error.error.data.password[0];
        } else {
          errorMessage = 'An error occurred. Please try again later.';
        }

        const toast = await this.toastController.create({
          message: errorMessage,
          duration: 2000,
          position: 'top',
        });

        toast.present();
      }
    );
  }

  dados() {
    this.navCtrl.navigateForward(['/tabs/profile/data']);
  }
}
