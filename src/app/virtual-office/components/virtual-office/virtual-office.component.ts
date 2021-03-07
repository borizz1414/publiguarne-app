import { Component, OnInit } from '@angular/core';
import { navigationDashboard } from 'src/app/shared/navigations/navigation';

@Component({
  selector: 'app-virtual-office',
  templateUrl: './virtual-office.component.html',
  styleUrls: ['./virtual-office.component.scss'],
})
export class VirtualOfficeComponent implements OnInit {
  navigation = navigationDashboard;
  constructor() {}

  ngOnInit(): void {}
}
