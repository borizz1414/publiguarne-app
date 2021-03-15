import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsContainer } from './containers/events/events.container';
import { SharedModule } from '../shared/shared.module';
import { CardsEventsComponent } from './components/cards-events/cards-events.component';
import { EventDialogComponent } from './components/event-dialog/event-dialog.component';
import { MaterialModule } from '../material/material.module';
import { CalendarContainer} from './containers/calendar/calendar.container';


@NgModule({
  declarations: [EventsContainer, CardsEventsComponent, EventDialogComponent, CalendarContainer],
  exports:[CardsEventsComponent],
  imports: [
    CommonModule,
    EventsRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class EventsModule { }
