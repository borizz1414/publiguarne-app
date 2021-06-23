import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'inicio',
    // canActivate:[AuthGuard],
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
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
  {
    path: 'perfil',
    loadChildren: () => import('./profile/profile.module').then((m) => m.ProfileModule),
  },
  {
    path: '**',
    redirectTo: 'inicio',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
