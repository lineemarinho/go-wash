import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { HistoricRoutingModule } from './historic-routing.module';
import { HistoricComponent } from './historic.component';
import { ComponentsModule } from '../shared/components/components.module';
import { HistoricalDetailComponent } from './historical-detail/historical-detail.component';
import { ToAssessComponent } from './to-assess/to-assess.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    HistoricRoutingModule,
    ComponentsModule,
  ],
  declarations: [
    HistoricComponent,
    HistoricalDetailComponent,
    ToAssessComponent,
  ],
})
export class HistoricModule {}
