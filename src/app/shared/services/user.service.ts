import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, tap } from "rxjs";
import { environment } from "src/environments/environment";
import { Storage } from "@ionic/storage";
import { User, UserInterface } from "src/app/access-page/profile.interfaces";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  token: any;
  private apiSign = `${environment.apiUrl}/api/user`;
  private apiMyAddress = `${environment.apiUrl}/api/auth/address`;
  private apiLogin = `${environment.apiUrl}/api/login`;
  private myData = `${environment.apiUrl}/api/auth`;
  private upUser = `${environment.apiUrl}/api/auth/user`;
  private myAddress = `${environment.apiUrl}/api/auth/`;
  private myVehicles = `${environment.apiUrl}/api/auth/`;
  private apiMyVehicle = `${environment.apiUrl}/api/auth/vehicle`;
  private upMyVehicle = `${environment.apiUrl}/api/auth/vehicle`;
  private apiGoogle = `${environment.apiUrl}/api/login/google`;
  private password = `${environment.apiUrl}/api/forgot-password`;
  private apiPassword = `${environment.apiUrl}/api/auth/change-password`;
  private apiCep = `${environment.apiUrl}/api/auth/via-cep`;
  private baseUrl = `${environment.apiUrl}/api/auth/address`;
  private apiLogout = `${environment.apiUrl}/api/auth/logout`;
  userStorageKey = "user";
  user: any;
  authToken: any;

  constructor(private http: HttpClient, private storage: Storage) {
    this.storage.create();

    this.storage.get("user").then((userData) => {
      this.user = userData;
      this.authToken = this.user.access_token;
    });
  }

  login(email: string, password: string): Observable<User> {
    const requestBody = {
      email: email,
      password: password,
    };

    return this.http.post<User>(this.apiLogin, requestBody).pipe(
      tap((user) => {
        console.log(user);
        this.storage.set("user", user);
      })
    );
  }
  logout() {
    const headers = new HttpHeaders().set(
      "Authorization",
      `Bearer ${this.authToken}`
    );

    return this.http.post(this.apiLogout, { headers });
  }
  loginGoogle() {
    return this.http.get(`${this.apiGoogle}`);
  }
  searchCep(cep: number) {
    const headers = new HttpHeaders().set(
      "Authorization",
      `Bearer ${this.authToken}`
    );

    return this.http.get(`${this.apiCep}/${cep}`, { headers });
  }
  getUserProfile(userId: number, token: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.get(`${this.myData}/user/${userId}`, { headers });
  }
  delete(userData: any): Observable<any> {
    const headers = new HttpHeaders().set(
      "Authorization",
      `Bearer ${this.authToken}`
    );
    return this.http.delete(`${this.baseUrl}/${userData}`, { headers });
  }

  signup(userData: any): Observable<any> {
    return this.http.post(this.apiSign, userData);
  }

  forgotPassword(userData: any): Observable<any> {
    const requestBody = {
      email: userData,
    };
    return this.http.post(this.password, requestBody);
  }
  upPassword(requestData: any): Observable<any> {
    const headers = new HttpHeaders().set(
      "Authorization",
      `Bearer ${this.authToken}`
    );

    return this.http.post(this.apiPassword, requestData, { headers });
  }

  profile(userId: number): Observable<any> {
    const headers = new HttpHeaders().set(
      "Authorization",
      `Bearer ${this.authToken}`
    );
    const url = `${this.myData}/user/${userId}`;
    return this.http.get(url, { headers });
  }

  createAddress(data: any): Observable<any> {
    const headers = new HttpHeaders().set(
      "Authorization",
      `Bearer ${this.authToken}`
    );
    return this.http.post(this.apiMyAddress, data, { headers });
  }
  addVehicle(data: any): Observable<any> {
    const headers = new HttpHeaders().set(
      "Authorization",
      `Bearer ${this.authToken}`
    );
    return this.http.post(this.apiMyVehicle, data, { headers });
  }

  upUserDate(requestData: any): Observable<any> {
    const headers = new HttpHeaders().set(
      "Authorization",
      `Bearer ${this.authToken}`
    );

    const url = `${this.upUser}/${requestData.id}`;
    return this.http.post(url, { headers });
  }
  upAddEdit(requestData: any): Observable<any> {
    const headers = new HttpHeaders().set(
      "Authorization",
      `Bearer ${this.authToken}`
    );
    const url = `${this.apiMyAddress}/${requestData.id}`;
    return this.http.post(url, { headers });
  }

  upVehicle(data: any): Observable<any> {
    const headers = new HttpHeaders().set(
      "Authorization",
      `Bearer ${this.authToken}`
    );
    const url = `${this.upMyVehicle}/${data.id}`;

    return this.http.post(url, data, { headers });
  }

  allAddress() {
    const headers = new HttpHeaders().set(
      "Authorization",
      `Bearer ${this.authToken}`
    );
    const url = `${this.myAddress}address`;
    return this.http.get(url, { headers });
  }

  allVehicles() {
    const headers = new HttpHeaders().set(
      "Authorization",
      `Bearer ${this.authToken}`
    );
    const url = `${this.myVehicles}vehicle`;
    return this.http.get(url, { headers });
  }

  saveUserDetailsToStorage(userDetails: any) {
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
  }
}
