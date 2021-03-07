import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsContainer } from './containers/events/events.container';
import { SharedModule } from '../shared/shared.module';
import { CardsEventsComponent } from './components/cards-events/cards-events.component';


@NgModule({
  declarations: [EventsContainer, CardsEventsComponent],
  imports: [
    CommonModule,
    EventsRoutingModule,
    SharedModule
  ]
})
export class EventsModule { }
