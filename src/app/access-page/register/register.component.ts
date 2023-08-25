import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  action = 'Criar conta';
  userData = {
    name: '',
    email: '',
    user_type_id: '1',
    password: '',
    is_active: '1',
    cpf_cnpj: '',
    terms: '1',
    birthday: '',
    phone: '',
  };
  error: any;
  constructor(
    private authService: AuthService,
    private navCtrl: NavController,
    private toastController: ToastController
  ) {}

  ngOnInit() {}
  async signup() {
    try {
      const response = await this.authService.signup(this.userData).toPromise();
      console.log('Resposta do servidor após o cadastro:', response);
      this.home();
    } catch (error) {
      console.log('colocar no toast o erro');
    }
  }
  home() {
    this.navCtrl.navigateForward('tabs/tab1');
  }
}
