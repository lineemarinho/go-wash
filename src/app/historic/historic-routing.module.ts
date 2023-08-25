import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoricComponent } from './historic.component';
import { HistoricalDetailComponent } from './historical-detail/historical-detail.component';
import { ToAssessComponent } from './to-assess/to-assess.component';

const routes: Routes = [
  {
    path: '',
    component: HistoricComponent,
  },
  {
    path: 'detail-historic',
    component: HistoricalDetailComponent,
  },
  {
    path: 'assess',
    component: ToAssessComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoricRoutingModule {}
