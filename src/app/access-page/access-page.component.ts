import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../shared/services/user.service';

@Component({
  selector: 'app-access-page',
  templateUrl: './access-page.component.html',
  styleUrls: ['./access-page.component.scss'],
})
export class AccessPageComponent implements OnInit {
  constructor(
    private navCtrl: NavController,
    private authService: AuthService
  ) {}

  ngOnInit() {}
  navigation(page: string) {
    console.log(page);
    this.navCtrl.navigateForward([page]);
  }
  loginGoogle() {
    this.authService.loginGoogle().subscribe(
      (response) => {
        console.log('response', response);
      },
      (error) => {
        console.error('Erro ao buscar detalhes do usuário:', error);
      }
    );
  }
}
