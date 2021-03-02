import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VirtualOfficeRoutingModule } from './virtual-office-routing.module';
import { VirtualOfficeContainer } from './containers/virtual-office/virtual-office.container';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { DirectoryModule } from '../directory/directory.module';
import { PostsOfficeComponent } from './components/posts-office/posts-office.component';

@NgModule({
  declarations: [VirtualOfficeContainer, PostsOfficeComponent],
  imports: [CommonModule, VirtualOfficeRoutingModule, MaterialModule,SharedModule, DirectoryModule],
})
export class VirtualOfficeModule {}
