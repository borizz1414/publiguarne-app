import { Component, OnInit } from '@angular/core';
import { navigationClassified, navigationDashboard, navigationSocialWork } from 'src/app/shared/navigations/navigation';

@Component({
  selector: 'app-virtual-office',
  templateUrl: './virtual-office.component.html',
  styleUrls: ['./virtual-office.component.scss'],
})
export class VirtualOfficeComponent implements OnInit {
  navigation = navigationDashboard;
  navigationClassified = navigationClassified;
  navigationSocialWork = navigationSocialWork;
  constructor() {}

  ngOnInit(): void {}
}
