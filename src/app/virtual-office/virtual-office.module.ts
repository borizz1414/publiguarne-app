import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VirtualOfficeRoutingModule } from './virtual-office-routing.module';
import { VirtualOfficeContainer } from './containers/virtual-office/virtual-office.container';

@NgModule({
  declarations: [VirtualOfficeContainer],
  imports: [CommonModule, VirtualOfficeRoutingModule],
})
export class VirtualOfficeModule {}
