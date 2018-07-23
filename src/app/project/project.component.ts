import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  
  constructor(public db:AngularFireDatabase) { }


  error:boolean
  loader:boolean
  ngOnInit() {
    this.loader=true
    this.getfewProjects()
  }
  delbtn_loader:boolean
 
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

