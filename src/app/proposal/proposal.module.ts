import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ProposalRoutingModule } from './proposal-routing.module';
import { ComponentsModule } from '../shared/components/components.module';
import { ProposalComponent } from './proposal.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { OrderComponent } from './order/order.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ProposalRoutingModule,
    ComponentsModule,
  ],
  declarations: [ProposalComponent, OrderComponent, AssessmentComponent],
})
export class ProposalModule {}
