import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { HeaderComponent } from './header/header.component';
import { SchedulingComponent } from './scheduling/scheduling.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { AddressesComponent } from './addresses/addresses.component';
import { ButtonComponent } from './button/button.component';
import { ModalFilterComponent } from './modal-filter/modal-filter.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule,
  ],
  providers: [
    NewsComponent,
    VehiclesComponent,
    HeaderComponent,
    SchedulingComponent,
    AddressesComponent,
    ButtonComponent,
    ModalFilterComponent,
  ],
  declarations: [
    NewsComponent,
    VehiclesComponent,
    HeaderComponent,
    SchedulingComponent,
    ButtonComponent,
    AddressesComponent,
    ModalFilterComponent,
  ],
  exports: [
    NewsComponent,
    VehiclesComponent,
    HeaderComponent,
    SchedulingComponent,
    ButtonComponent,
    AddressesComponent,
    ModalFilterComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
