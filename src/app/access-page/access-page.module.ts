import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../shared/components/components.module';
import { AccessPageComponent } from './access-page.component';
import { AccessPageRoutingModule } from '../access-page/access-page-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from '../shared/services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    AccessPageRoutingModule,
    ComponentsModule,
    HttpClientModule,
  ],
  declarations: [
    AccessPageComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
  ],
  providers: [AuthService],
})
export class AccessPageModule {}
