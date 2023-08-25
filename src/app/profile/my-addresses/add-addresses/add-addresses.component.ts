import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-add-addresses',
  templateUrl: './add-addresses.component.html',
  styleUrls: ['./add-addresses.component.scss'],
})
export class AddAddressesComponent implements OnInit {
  action = 'Adicionar endereço';
  item: any;
  detailsAddresses = {
    cep: '',
    address: '',
    number: '',
    complement: '',
  };
  constructor(
    private navCtrl: NavController,
    private authService: AuthService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const encodedItem = this.route.snapshot.paramMap.get('item');

    if (encodedItem !== null) {
      this.detailsAddresses = JSON.parse(encodedItem);
    }
  }
  searchCep(cep: any) {
    if (cep.length === 8) {
      this.authService.searchCep(cep).subscribe(
        (response: any) => {
          console.log(response.data);

          this.detailsAddresses = {
            cep: response.data.cep,
            address: response.data.logradouro,
            number: '',
            complement: '',
          };
        },
        (error) => {
          console.error('Erro na consulta do CEP', error);
        }
      );
    }
  }
  submitForm() {
    this.authService.createAddress(this.detailsAddresses).subscribe(
      (response) => {
        console.log('Endereço cadastrado com sucesso!', response);
        this.navCtrl.navigateForward('tabs/profile/addresses');
      },
      (error) => {
        console.error('Erro ao cadastrar endereço:', error);
      }
    );
  }
}
