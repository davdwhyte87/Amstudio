import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import {Image} from '../image'
import { AngularFireDatabase } from 'angularfire2/database';
import { ProjectService } from '../project.service';
import {AngularFireStorage} from 'angularfire2/storage'
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-projects',
  templateUrl: './admin-projects.component.html',
  styleUrls: ['./admin-projects.component.css']
})
export class AdminProjectsComponent implements OnInit {

  constructor(public db:AngularFireDatabase,
     private projectService:ProjectService,
     private storage:AngularFireStorage,
    private router:Router) { }
  project=new Project()
  image=new Image()
  loader:boolean=false
  ngOnInit() {
  }
  
  change(event){
    this.file = event.target.files[0];
  }
  file:File
  createProject(){
    var x = 10930930993; // can be any number
    var rand = Math.floor(Math.random()*x) + 1;
    const filePath = 'projects/'+rand;
    this.loader=true
    this.project.image_name=rand.toString()
    var task=this.storage.upload(filePath,this.file).then(()=>{
      const storageref=this.storage.ref(filePath)
      storageref.getDownloadURL().subscribe(data=>{
        this.project.image_link=data
        this.project.id= Math.floor((Math.random() * 1092093939393) + 1).toString()+"skslkslk"
        const ref=this.db.list('projects')
        ref.push(this.project).then((act)=>{
          this.loader=false
          const ref=this.db.list('projects').update(act.key,{key:act.key})
          console.log(act.key)
          this.router.navigate(['/admin-project-view']) 
        });
        // console.log(data)
      })
    })    
 
  }
}
