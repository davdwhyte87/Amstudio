import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../project';
import { Image } from '../image';
import { AngularFireDatabase, AngularFireObject, } from 'angularfire2/database';
import { ProjectService } from '../project.service';
import {AngularFireStorage} from 'angularfire2/storage'
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-admin-edit-project',
  templateUrl: './admin-edit-project.component.html',
  styleUrls: ['./admin-edit-project.component.css']
})
export class AdminEditProjectComponent implements OnInit {

  constructor(
    public db:AngularFireDatabase,
     private projectService:ProjectService,
     private storage:AngularFireStorage,
     private route:ActivatedRoute
  ) {
    const id=this.route.snapshot.paramMap.get('id')
    this.id=id
    
   }
   delbtn_loader:boolean
   pgloader:boolean=true
   project=new Project()
   id:string
   key:string
   getProject(id){
    this.db.object("projects/"+id).valueChanges().subscribe((project:Project)=>{
      this.project=project
      this.pgloader=false
    })
    return this.project
    // this.db.list('projects',ref=>ref.orderByChild('key').equalTo(id).limitToFirst(1))
    // .valueChanges().subscribe((project)=>{
    //   this.project=project;
    //   this.setem(this.project)
    //   console.log(this.project);
    // });
  }

  setem(project:Project){
    this.editProject=project
  }

  editProject=new Project()
  image=new Image()
  loader:boolean=false
  ngOnInit() {
    this.getProject(this.id)
    console.log(this.project)
  }

  change(event){
    this.file = event.target.files[0];
  }
  
  file:File
  updateProject(){
    console.log(this.project.key)
    this.loader=true
    if(this.file){
      console.log("clicked")
      const filePath = 'projects/'+this.project.image_name;
      this.loader=true
      var task=this.storage.upload(filePath,this.file).then(()=>{
        const storageref=this.storage.ref(filePath)
        storageref.getDownloadURL().subscribe(data=>{
          this.project.image_link=data
          const ref=this.db.list('projects')
          ref.update(this.project.key,this.project).then(()=>{
            this.loader=false
          })
        })
      }) 
    }else{
      const ref=this.db.list('projects')
      ref.update(this.project.key,this.project).then(()=>{
        this.loader=false
      })
    }
  }


 
}
