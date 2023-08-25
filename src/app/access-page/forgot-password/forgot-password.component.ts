import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  email: string = '';
  constructor(private authService: AuthService) {}

  ngOnInit() {}
  password(email: string) {
    this.authService.forgotPassword(email).subscribe(
      (user) => {
        console.log(user);
      },
      async (error) => {
        console.log(error);
      }
    );
  }
}
