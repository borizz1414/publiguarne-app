import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accounts-admin',
  templateUrl: './accounts-admin.component.html',
  styleUrls: ['./accounts-admin.component.scss']
})
export class AccountsAdminComponent implements OnInit {
  page ="Cuentas"
  constructor() { }

  ngOnInit(): void {
  }

}
