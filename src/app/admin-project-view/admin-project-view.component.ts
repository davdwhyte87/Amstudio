import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import { reject } from 'q';

@Component({
  selector: 'app-admin-project-view',
  templateUrl: './admin-project-view.component.html',
  styleUrls: ['./admin-project-view.component.css']
})
export class AdminProjectViewComponent implements OnInit {

  constructor(public db:AngularFireDatabase) { }

  error:boolean
  loader:boolean
  ngOnInit() {
    this.loader=true
    this.getfewProjects()
  }
  delbtn_loader:boolean
  deleteProject(key){
    this.loader=true
    console.log(key)
    this.db.object('projects/'+key).remove().then(()=>{
      this.loader=false
    })
  }
  projects:any
  getfewProjects(){
    this.db.list('projects')
    .valueChanges().subscribe(projects=>{
      this.projects=projects;
      if(!this.projects){
        this.error=true
      }
      this.loader=false
      console.log(this.projects);
    }, (error:any)=>{
      console.log(error)
    });
  }

}
