import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlansRoutingModule } from './plans-routing.module';

import { PlansQuestionsContainer} from './containers/plans/plans-questions.container';
import { PlansComponent } from './components/plans/plans.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [PlansQuestionsContainer, PlansComponent],
  exports:[PlansComponent],
  imports: [
    CommonModule,
    MaterialModule,
    PlansRoutingModule,
    ReactiveFormsModule
  ]
})
export class PlansModule { }
