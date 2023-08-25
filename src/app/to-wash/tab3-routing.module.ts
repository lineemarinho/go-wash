import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab3Page } from './tab3.page';
import { WashDateComponent } from './wash-date/wash-date.component';
import { WashSuccessComponent } from './wash-success/wash-success.component';

const routes: Routes = [
  {
    path: '',
    component: Tab3Page,
  },
  {
    path: 'wash-date',
    component: WashDateComponent,
  },
  {
    path: 'success-wash',
    component: WashSuccessComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab3PageRoutingModule {}
