import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MaterialModule } from '../material/material.module';
import { DashboardContainer } from './containers/dashboard/dashboard.container';

@NgModule({
  declarations: [DashboardContainer],
  imports: [CommonModule, HomeRoutingModule, MaterialModule],
})
export class HomeModule {}
