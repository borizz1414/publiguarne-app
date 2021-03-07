import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialWorkRoutingModule } from './social-work-routing.module';
import { SocialworkDashboardContainer } from './containers/socialwork-dashboard/socialwork-dashboard.container';
import { SharedModule } from '../shared/shared.module';
import { DirectoryModule } from '../directory/directory.module';
import { ClassifiedModule } from '../classified/classified.module';


@NgModule({
  declarations: [SocialworkDashboardContainer],
  imports: [
    CommonModule,
    SocialWorkRoutingModule,
    SharedModule,
    DirectoryModule,
    ClassifiedModule
  ]
})
export class SocialWorkModule { }
