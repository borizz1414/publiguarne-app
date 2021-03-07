import { Component, OnInit } from '@angular/core';
import { navigationClassified, navigationDashboard, navigationSocialWork } from 'src/app/shared/navigations/navigation';

@Component({
  selector: 'app-socialwork-dashboard',
  templateUrl: './socialwork-dashboard.container.html',
  styleUrls: ['./socialwork-dashboard.container.scss']
})
export class SocialworkDashboardContainer implements OnInit {
  navigationClassified = navigationClassified;
  navigationDashboard = navigationDashboard;
  navigation = navigationSocialWork;
  constructor() { }

  ngOnInit(): void {
  }

}
