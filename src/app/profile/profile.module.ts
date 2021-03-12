import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { HeaderProfileComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MenuComponent } from './components/menu/menu.component';
import { AdminProfileContainer } from './admin/admin-profile.container';
import { HomeModule } from '../home/home.module';
import { MaterialModule } from '../material/material.module';
import { DirectoryAdminComponent } from './admin/components/directory-admin/directory-admin.component';
import { LivesAdminComponent } from './admin/components/lives-admin/lives-admin.component';
import { PodcastsAdminComponent } from './admin/components/podcasts-admin/podcasts-admin.component';
import { AdvertisementsAdminComponent } from './admin/components/advertisements-admin/advertisements-admin.component';
import { AccountsAdminComponent } from './admin/components/accounts-admin/accounts-admin.component';
import { ClassifiedsAdminComponent } from './admin/components/classifieds-admin/classifieds-admin.component';
import { BiographyComponent } from './containers/biography/biography.component';
import { TableCrudComponent } from './components/table-crud/table-crud.component';
import { AddLiveComponent } from './admin/shared/add-dialogs/add-live/add-live.component';
import { AddPodcastsComponent } from './admin/shared/add-dialogs/add-podcasts/add-podcasts.component';
import { AddAdComponent } from './admin/shared/add-dialogs/add-ad/add-ad.component';
import { AddDirectoryComponent } from './admin/shared/add-dialogs/add-directory/add-directory.component';
import { AddClassifiedComponent } from './admin/shared/add-dialogs/add-classified/add-classified.component';
import { EditAccountComponent } from './admin/shared/add-dialogs/edit-account/edit-account.component';



@NgModule({
  declarations: [HeaderProfileComponent, SidebarComponent, MenuComponent, AdminProfileContainer, DirectoryAdminComponent, LivesAdminComponent, PodcastsAdminComponent, AdvertisementsAdminComponent, AccountsAdminComponent, ClassifiedsAdminComponent, BiographyComponent, TableCrudComponent, AddLiveComponent, AddPodcastsComponent, AddAdComponent, AddDirectoryComponent, AddClassifiedComponent, EditAccountComponent],
  exports: [HeaderProfileComponent, SidebarComponent, MenuComponent, AdminProfileContainer],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    HomeModule,
    MaterialModule
  ]
})
export class ProfileModule { }
