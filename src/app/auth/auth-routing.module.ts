import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterOfficeComponent } from './components/register-office/register-office.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: LoginComponent,
      },
      // {
      //   path: 'register-office',
      //   component: RegisterOfficeComponent,
      // },
      {
        path: 'registro',
        component: RegisterComponent,
      },
      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
