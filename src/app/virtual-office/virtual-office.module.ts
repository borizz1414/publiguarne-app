import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VirtualOfficeRoutingModule } from './virtual-office-routing.module';
import { VirtualOfficeContainer } from './containers/virtual-office/virtual-office.container';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [VirtualOfficeContainer],
  imports: [CommonModule, VirtualOfficeRoutingModule, MaterialModule,SharedModule],
})
export class VirtualOfficeModule {}
