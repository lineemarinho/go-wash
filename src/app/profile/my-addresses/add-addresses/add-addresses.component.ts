import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NavController } from "@ionic/angular";
import { AuthService } from "src/app/shared/services/user.service";

@Component({
  selector: "app-add-addresses",
  templateUrl: "./add-addresses.component.html",
  styleUrls: ["./add-addresses.component.scss"],
})
export class AddAddressesComponent implements OnInit {
  action = "Adicionar endereço";
  item: any;
  edit: any;
  detailsAddresses = {
    id: "",
    cep: "",
    address: "",
    number: "",
    complement: "",
  };
  constructor(
    private navCtrl: NavController,
    private authService: AuthService,
    private route: ActivatedRoute,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const navigation = history.state;
    if (navigation.item) {
      this.detailsAddresses = navigation.item;
      this.detailsAddresses = {
        id: this.detailsAddresses.id,
        cep: this.detailsAddresses.cep,
        address: this.detailsAddresses.address,
        number: this.detailsAddresses.number,
        complement: this.detailsAddresses.complement,
      };

      console.log(this.detailsAddresses, "item");
    }
    if (navigation.edit !== undefined) {
      this.edit = navigation.edit;
      console.log(this.edit, "edit");
    }
  }
  searchCep(cep: any) {
    if (cep.length === 8) {
      this.authService.searchCep(cep).subscribe(
        (response: any) => {
          console.log(response.data);

          this.detailsAddresses = {
            id: "",
            cep: response.data.cep,
            address: response.data.logradouro,
            number: "",
            complement: "",
          };
        },
        (error) => {
          console.error("Erro na consulta do CEP", error);
        }
      );
    }
  }
  submitForm() {
    this.authService.createAddress(this.detailsAddresses).subscribe(
      (response) => {
        console.log("Endereço cadastrado com sucesso!", response);
        this.navCtrl.navigateForward("tabs/profile/addresses");
      },
      (error) => {
        console.error("Erro ao cadastrar endereço:", error);
      }
    );
  }

  upAddEdit(detailsAddresses: any) {
    console.log(detailsAddresses, "detailsAddresses");
    this.authService.upAddEdit(detailsAddresses).subscribe(
      (response) => {
        this.navCtrl.navigateForward("tabs/profile/addresses");
      },
      (error) => {
        console.error("Erro ao cadastrar endereço:", error);
      }
    );
  }
}
