import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from '../components/admin/admin.component';
import { HomeComponent } from '../components/home/home.component';
import { CallbackComponent } from '../components/callback/callback.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../services/auth.guard';


const routes: Routes = [
  {
    path : 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard]
  },
  {
    path : 'home',
    component: HomeComponent
  },
  {
    path: 'callback',
    component: CallbackComponent
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
