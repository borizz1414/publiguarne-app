import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'directorio',
    loadChildren: () => import('./directory/directory.module').then((m) => m.DirectoryModule),
  },
  {
    path: 'oficina-virtual',
    loadChildren: () => import('./virtual-office/virtual-office.module').then((m) => m.VirtualOfficeModule),
  },
  {
    path: 'planes',
    loadChildren: () => import('./plans/plans.module').then((m) => m.PlansModule),
  },
  {
    path: 'podcasts',
    loadChildren: () => import('./podcasts/podcasts.module').then((m) => m.PodcastsModule),
  },
  {
    path: 'eventos',
    loadChildren: () => import('./events/events.module').then((m) => m.EventsModule),
  },
  // {
  //   path: '**',
  //   redirectTo: 'auth',
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
