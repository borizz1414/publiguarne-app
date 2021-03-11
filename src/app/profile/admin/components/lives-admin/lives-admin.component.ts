import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lives-admin',
  templateUrl: './lives-admin.component.html',
  styleUrls: ['./lives-admin.component.scss']
})
export class LivesAdminComponent implements OnInit {
  page ="En vivos"
  constructor() { }

  ngOnInit(): void {
  }

}
