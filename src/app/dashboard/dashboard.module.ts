import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SideBarComponent } from '../navigations/side-bar/side-bar.component';
import { NavBarComponent } from '../navigations/nav-bar/nav-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
    CommonModule, DashboardRoutingModule, ReactiveFormsModule, FormsModule, NgbModule.forRoot(),
  ],
  declarations: [DashboardComponent, HomeComponent, SideBarComponent, NavBarComponent]
})
export class DashboardModule { }
