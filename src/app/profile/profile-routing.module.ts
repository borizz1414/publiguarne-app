import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsOfficeComponent } from '../home/components/posts-office/posts-office.component';
import { LayoutComponent } from '../layout/layout.component';
import { AdminProfileContainer } from './admin/admin-profile.container';
import { AccountsAdminComponent } from './admin/components/accounts-admin/accounts-admin.component';
import { AdvertisementsAdminComponent } from './admin/components/advertisements-admin/advertisements-admin.component';
import { ClassifiedsAdminComponent } from './admin/components/classifieds-admin/classifieds-admin.component';
import { DirectoryAdminComponent } from './admin/components/directory-admin/directory-admin.component';
import { LivesAdminComponent } from './admin/components/lives-admin/lives-admin.component';
import { PodcastsAdminComponent } from './admin/components/podcasts-admin/podcasts-admin.component';
import { BiographyComponent } from './containers/biography/biography.component';


const routes: Routes = [{
  path:'',
  component:LayoutComponent,
  children:[
    {
    path:'admin',
    component:AdminProfileContainer,
    children:[{
      path:'biografia',
      component:BiographyComponent
    },{
      path:'en-vivos',
      component:LivesAdminComponent
    },{
      path:'podcasts',
      component:PodcastsAdminComponent
    },{
      path:'anuncios',
      component:AdvertisementsAdminComponent
    },{
      path:'cuentas',
      component:AccountsAdminComponent
    },{
      path:'clasificados',
      component:ClassifiedsAdminComponent
    },{
      path:'directorios',
      component:DirectoryAdminComponent
    },
    {
      path:'**',
      redirectTo:'biografia',
    }
  ]
  },
  
 
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
