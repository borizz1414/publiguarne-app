import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PodcastsRoutingModule } from './podcasts-routing.module';
import { PodcastsComponent } from './containers/podcasts/podcasts.component';



@NgModule({
  declarations: [PodcastsComponent],
  imports: [
    CommonModule,
    PodcastsRoutingModule
  ]
})
export class PodcastsModule { }
