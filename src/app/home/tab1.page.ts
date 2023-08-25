import { Component, Input, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/shared/services/user.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  edit = true;
  action = 'Adicionar novo veiculo';
  address: any;
  user: any;
  vehicles: any;
  listVehicles: any;
  detailsAddresses: any;
  constructor(
    private authService: AuthService,
    private storage: Storage,
    private navCtrl: NavController,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    const encodedItem = this.route.snapshot.paramMap.get('response');
    console.log(encodedItem);
    if (encodedItem !== null) {
      this.detailsAddresses = JSON.parse(encodedItem);
    }

    setTimeout(() => {
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
}
