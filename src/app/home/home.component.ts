import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import { Project } from '../project';
import {AngularFireAuth} from 'angularfire2/auth';
import { first } from 'rxjs/operators';
import * as firebase from "firebase";
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  authState: any;
  constructor(public db:AngularFireDatabase, private auth:AngularFireAuth) {
    this.auth.authState.subscribe((auth)=>{
      this.authState=auth
    })
   }

   get authenticated(): boolean {
    return this.authState !== null;
  }

  ngOnInit() {
    this.getfewProjects()
    console.log(this.authenticated)
  }
  projects:any
  getfewProjects(){
    this.db.list('projects',ref=>ref.limitToFirst(3))
    .valueChanges().subscribe(projects=>{
      this.projects=projects;
      console.log(this.projects);
    });
  }
  

  loader:boolean
  signOut(){
    this.loader=true
    this.auth.auth.signOut().then(()=>{
      this.loader=false
    })
  }

}
