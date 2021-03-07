import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { PodcastsComponent } from './containers/podcasts/podcasts.component';

const routes: Routes = [
  {
    path:'',
    component:LayoutComponent,
    children:[{
      path:'',
      component:PodcastsComponent


    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PodcastsRoutingModule { }
