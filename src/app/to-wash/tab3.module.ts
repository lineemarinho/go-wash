import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab3PageRoutingModule } from './tab3-routing.module';
import { ComponentsModule } from '../shared/components/components.module';
import { WashDateComponent } from './wash-date/wash-date.component';
import { WashSuccessComponent } from './wash-success/wash-success.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab3PageRoutingModule,
    ComponentsModule,
  ],
  declarations: [Tab3Page, WashDateComponent, WashSuccessComponent],
})
export class Tab3PageModule {}
