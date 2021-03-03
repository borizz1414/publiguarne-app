import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VirtualOfficeRoutingModule } from './virtual-office-routing.module';
import { VirtualOfficeComponent } from './components/virtual-office/virtual-office.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { DirectoryModule } from '../directory/directory.module';
import { PostsOfficeComponent } from './components/posts-office/posts-office.component';
import { PostsContainer } from './containers/posts/posts.container';
import { AdsContainer } from './containers/ads/ads.container';
import { SidebarRightContainer} from './containers/sidebar-right/sidebar-right.container';


@NgModule({
  declarations: [VirtualOfficeComponent, PostsOfficeComponent, PostsContainer, AdsContainer, SidebarRightContainer],
  imports: [CommonModule, VirtualOfficeRoutingModule, MaterialModule,SharedModule, DirectoryModule],
})
export class VirtualOfficeModule {}
