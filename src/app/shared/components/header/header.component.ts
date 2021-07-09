import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { navigationDashboard } from '../../navigations/navigation';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navigation = navigationDashboard;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  redirectHome(){
    this.router.navigate(['/directorio']);
  }

}
