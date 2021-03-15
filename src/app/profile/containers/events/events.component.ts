import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  open_form = false;
  title_form= "";
  constructor() { }

  ngOnInit(): void {
  }
  openForm(action){
    this.open_form = !this.open_form;
    this.title_form = action;
  }
  getEvent(type){
    this.open_form = !this.open_form;
    this.title_form = type;
  }

}
