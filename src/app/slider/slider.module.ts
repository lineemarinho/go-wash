import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { SliderRoutingModule } from './slider-routing.module';
import { ComponentsModule } from '../shared/components/components.module';
import { SliderComponent } from './slider.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SliderRoutingModule,
    ComponentsModule,
  ],
  declarations: [SliderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SliderModule {}
