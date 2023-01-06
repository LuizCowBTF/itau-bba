import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessRoutingModule } from './business-routing.module';
import { BusinesListComponent } from './busines-list/busines-list.component';


@NgModule({
  declarations: [
    BusinesListComponent
  ],
  imports: [
    CommonModule,
    BusinessRoutingModule
  ],
  exports: [
  ]
})
export class BusinessModule { }
