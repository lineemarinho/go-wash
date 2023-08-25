import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { ComponentsModule } from '../shared/components/components.module';
import { MyDataComponent } from './my-data/my-data.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';
import { MyAddressesComponent } from './my-addresses/my-addresses.component';
import { MyVehiclesComponent } from './my-vehicles/my-vehicles.component';
import { AddAddressesComponent } from './my-addresses/add-addresses/add-addresses.component';
import { AddVehiclesComponent } from './my-vehicles/add-vehicles/add-vehicles.component';
import { AuthService } from '../shared/services/user.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ProfileRoutingModule,
    ComponentsModule,
    HttpClientModule,
  ],
  declarations: [
    ProfileComponent,
    MyDataComponent,
    ChangePasswordComponent,
    TermsOfUseComponent,
    MyAddressesComponent,
    MyVehiclesComponent,
    AddAddressesComponent,
    AddVehiclesComponent,
  ],
  providers: [AuthService],
})
export class ProfileModule {}
