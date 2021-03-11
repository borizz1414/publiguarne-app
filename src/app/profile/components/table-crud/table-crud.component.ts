import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-crud',
  templateUrl: './table-crud.component.html',
  styleUrls: ['./table-crud.component.scss']
})
export class TableCrudComponent implements OnInit {
 @Input() title;
  constructor() { }

  ngOnInit(): void {
  }

}
