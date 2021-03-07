import { Component, OnInit } from '@angular/core';
import { navigationDashboard } from "../../../shared/navigations/navigation-dashboard";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.container.html',
  styleUrls: ['./dashboard.container.scss'],
})
export class DashboardContainer implements OnInit {
  showFiller = true;
  navigation = navigationDashboard;
  constructor() {}

  ngOnInit(): void {
  }
}
