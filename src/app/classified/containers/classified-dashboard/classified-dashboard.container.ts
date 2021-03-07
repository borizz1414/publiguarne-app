import { Component, OnInit } from '@angular/core';
import { navigationClassified, navigationDashboard, navigationSocialWork } from 'src/app/shared/navigations/navigation';

@Component({
  selector: 'app-classified-dashboard',
  templateUrl: './classified-dashboard.container.html',
  styleUrls: ['./classified-dashboard.container.scss']
})
export class ClassifiedDashboardContainer implements OnInit {
  navigation = navigationClassified;
  navigationDashboard = navigationDashboard;
  navigationSocialWork = navigationSocialWork;
  
  
  constructor() { }

  ngOnInit(): void {
  }

}
