import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProposalComponent } from './proposal.component';
import { OrderComponent } from './order/order.component';
import { AssessmentComponent } from './assessment/assessment.component';

const routes: Routes = [
  {
    path: '',
    component: ProposalComponent,
  },
  {
    path: 'order',
    component: OrderComponent,
  },
  {
    path: 'assessment',
    component: AssessmentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProposalRoutingModule {}
