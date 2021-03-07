import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { ClassifiedDashboardContainer } from './containers/classified-dashboard/classified-dashboard.container';

const routes: Routes = [
  {
    path:'',
    component:LayoutComponent,
    children:[{
      path:'',
      component:ClassifiedDashboardContainer
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassifiedRoutingModule { }
