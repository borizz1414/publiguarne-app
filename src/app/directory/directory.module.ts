import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectoryRoutingModule } from './directory-routing.module';
import { MaterialModule } from '../material/material.module';
import { DashboardContainer } from './containers/dashboard/dashboard.container';
import { SharedModule } from '../shared/shared.module';
import { PublicityComponent } from './components/publicity/publicity.component';
import { ListDirectoryComponent } from './components/list-directory/list-directory.component';
import { BannerRightComponent } from './components/banner-right/banner-right.component';


@NgModule({
  declarations: [DashboardContainer, PublicityComponent, ListDirectoryComponent, BannerRightComponent],
  imports: [CommonModule, DirectoryRoutingModule, MaterialModule, SharedModule],
})
export class DirectoryModule {}
