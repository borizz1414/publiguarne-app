import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassifiedRoutingModule } from './classified-routing.module';
import { ClassifiedDashboardContainer} from './containers/classified-dashboard/classified-dashboard.container';
import { ClassifiedComponent } from './components/classified/classified.component';
import { SharedModule } from '../shared/shared.module';
import { DirectoryModule } from '../directory/directory.module';


@NgModule({
  declarations: [ClassifiedDashboardContainer, ClassifiedComponent],
  exports:[ClassifiedComponent],
  imports: [
    CommonModule,
    ClassifiedRoutingModule,
    SharedModule,
    DirectoryModule
  ]
})
export class ClassifiedModule { }
