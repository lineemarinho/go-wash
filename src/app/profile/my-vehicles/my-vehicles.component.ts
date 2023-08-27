import { Component, Input, OnInit } from "@angular/core";
import { Storage } from "@ionic/storage-angular";
import { NavController } from "@ionic/angular";
import { AuthService } from "src/app/shared/services/user.service";

@Component({
  selector: "app-my-vehicles",
  templateUrl: "./my-vehicles.component.html",
  styleUrls: ["./my-vehicles.component.scss"],
})
export class MyVehiclesComponent implements OnInit {
  edit: any;
  action = "Adicionar novo veiculo";
  address: any;
  user: any;
  vehicles: any;
  listVehicles: any;
  constructor(
    private authService: AuthService,
    private storage: Storage,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.storage.create();

    this.storage.get("user").then((userData) => {
      this.user = userData;
    });
    setTimeout(() => {
      this.authService.allVehicles().subscribe(
        (response) => {
          this.listVehicles = response;
          this.vehicles = this.listVehicles.data;
        },
        (error) => {
          console.error("Erro ao buscar detalhes do usuário:", error);
        }
      );
    }, 200);
  }
  addVehicles() {
    this.navCtrl.navigateForward("tabs/profile/add-vehicles");
  }
}
