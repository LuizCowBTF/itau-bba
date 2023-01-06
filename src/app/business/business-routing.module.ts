import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinesListComponent } from './busines-list/busines-list.component';

const routes: Routes = [
  { path: '', component: BusinesListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessRoutingModule { }
