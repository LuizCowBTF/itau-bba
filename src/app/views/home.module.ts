import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialsModule } from '../material/material.module';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialsModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class HomeModule { }
