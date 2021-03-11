import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-podcasts-admin',
  templateUrl: './podcasts-admin.component.html',
  styleUrls: ['./podcasts-admin.component.scss']
})
export class PodcastsAdminComponent implements OnInit {
  page ="Podcasts"
  constructor() { }

  ngOnInit(): void {
  }

}
