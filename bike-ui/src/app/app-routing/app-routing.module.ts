import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from '../components/admin/admin.component';
import {HomeComponent} from '../components/home/home.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path : 'admin',
    component: AdminComponent
  },
  {
    path : 'home',
    component: HomeComponent
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
