import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Storage } from '@ionic/storage';
import { User, UserInterface } from 'src/app/access-page/profile.interfaces';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  token: any;
  private apiAdditional = `${environment.apiUrl}/api/auth/additional-service`;
  private apiTypeWash = `${environment.apiUrl}/api/auth/wash-type`;
  userStorageKey = 'user';
  user: any;
  authToken: any;

  constructor(private http: HttpClient, private storage: Storage) {
    this.storage.create();

    this.storage.get('user').then((userData) => {
      this.user = userData;
      this.authToken = this.user.access_token;
    });
  }
  listType(userData: any) {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${userData.access_token}`
    );
    return this.http.get(`${this.apiTypeWash}`, { headers });
  }
  listAdditional(userData: any) {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${userData.access_token}`
    );
    return this.http.get(`${this.apiAdditional}`, { headers });
  }
}
