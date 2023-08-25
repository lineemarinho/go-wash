import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () =>
          import('../home/tab1.module').then((m) => m.Tab1PageModule),
      },
      {
        path: 'tab2',
        loadChildren: () =>
          import('../my-appointments/tab2.module').then(
            (m) => m.Tab2PageModule
          ),
      },
      {
        path: 'tab3',
        loadChildren: () =>
          import('../to-wash/tab3.module').then((m) => m.Tab3PageModule),
      },
      {
        path: 'historic',
        loadChildren: () =>
          import('../historic/historic.module').then((m) => m.HistoricModule),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('../profile/profile.module').then((m) => m.ProfileModule),
      },
      {
        path: 'access-page',
        loadChildren: () =>
          import('../access-page/access-page.module').then(
            (m) => m.AccessPageModule
          ),
      },
      {
        path: 'proposal',
        loadChildren: () =>
          import('../proposal/proposal.module').then((m) => m.ProposalModule),
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
