import { Component, OnInit } from '@angular/core';
import { navigationEvents } from 'src/app/shared/navigations/navigation-dashboard';

@Component({
  selector: 'app-events',
  templateUrl: './events.container.html',
  styleUrls: ['./events.container.scss']
})
export class EventsContainer implements OnInit {
navigation = navigationEvents
  constructor() { }

  ngOnInit(): void {
  }

}
