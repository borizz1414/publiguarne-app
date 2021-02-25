import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from '../material/material.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    HomeComponent,
  ],
  exports: [HeaderComponent, FooterComponent, HomeComponent],
  imports: [CommonModule, MaterialModule, RouterModule],
})
export class SharedModule {}
