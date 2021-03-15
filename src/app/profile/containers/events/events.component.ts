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
  openForm(title_form){
    this.open_form = !this.open_form;
    this.title_form = title_form;
  }
  getEvent(type){
    this.open_form = !this.open_form;
    this.title_form = type;
  }

}
