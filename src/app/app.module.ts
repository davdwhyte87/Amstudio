import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database'
import { AppComponent } from './app.component';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AdminProjectsComponent } from './admin-projects/admin-projects.component';
import { AuthGuard } from './auth.guard';
import {FormsModule} from '@angular/forms';
import { AdminProjectViewComponent } from './admin-project-view/admin-project-view.component';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AdminEditProjectComponent } from './admin-edit-project/admin-edit-project.component';
import { ProjectComponent } from './project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AdminProjectsComponent,
    AdminProjectViewComponent,
    AdminEditProjectComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
