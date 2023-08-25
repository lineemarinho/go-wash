import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { MyDataComponent } from './my-data/my-data.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { MyAddressesComponent } from './my-addresses/my-addresses.component';
import { MyVehiclesComponent } from './my-vehicles/my-vehicles.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';
import { QuestionsComponent } from './questions/questions.component';
import { AddAddressesComponent } from './my-addresses/add-addresses/add-addresses.component';
import { AddVehiclesComponent } from './my-vehicles/add-vehicles/add-vehicles.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
  },
  {
    path: 'data',
    component: MyDataComponent,
  },
  {
    path: 'password',
    component: ChangePasswordComponent,
  },
  {
    path: 'addresses',
    component: MyAddressesComponent,
  },
  {
    path: 'add-addresses',
    component: AddAddressesComponent,
  },
  {
    path: 'vehicles',
    component: MyVehiclesComponent,
  },
  {
    path: 'add-vehicles',
    component: AddVehiclesComponent,
  },
  {
    path: 'terms',
    component: TermsOfUseComponent,
  },
  {
    path: 'questions',
    component: QuestionsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
