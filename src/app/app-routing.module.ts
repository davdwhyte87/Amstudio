import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from '../app/login/login.component';
import { HomeComponent } from './home/home.component';
import { AdminProjectsComponent } from './admin-projects/admin-projects.component';
import { AuthGuard } from './auth.guard';
import { AdminProjectViewComponent } from './admin-project-view/admin-project-view.component';
import { AdminEditProjectComponent } from './admin-edit-project/admin-edit-project.component';
import { ProjectComponent } from './project/project.component';

const routes:Routes=[
  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'admin-project', component: AdminProjectsComponent, canActivate:[AuthGuard]},
  {path:'admin-project-view', component:AdminProjectViewComponent, canActivate:[AuthGuard]},
  {path:'admin-edit-project/:id', component:AdminEditProjectComponent, canActivate:[AuthGuard]},
  {path:'project-view',component:ProjectComponent}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
