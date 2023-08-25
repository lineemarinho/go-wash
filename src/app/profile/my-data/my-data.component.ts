import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/access-page/profile.interfaces';
import { AuthService } from 'src/app/shared/services/user.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-my-data',
  templateUrl: './my-data.component.html',
  styleUrls: ['./my-data.component.scss'],
})
export class MyDataComponent implements OnInit {
  user: any;
  userDetails: any;
  userId: any;
  constructor(private authService: AuthService, private storage: Storage) {}

  ngOnInit() {
    this.storage.create();
    this.storage.get('user').then((userData) => {
      this.user = userData;
    });
    setTimeout(() => {
      this.userId = this.user.user.id;
      this.authService.profile(this.userId).subscribe(
        (response) => {
          this.userDetails = response.data;
          console.log(this.userDetails);
        },
        (error) => {
          console.error('Erro ao buscar detalhes do usuário:', error);
        }
      );
    }, 200);
  }
}
