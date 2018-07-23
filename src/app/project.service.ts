import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import {AngularFireStorage} from 'angularfire2/storage'
@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  basepath:string
  constructor(private storage:AngularFireStorage) { }

  pushImage(file,path){
    var task=this.storage.upload(path,file)    
    const storageref=this.storage.ref(path)
    var url
    console.log(storageref.getDownloadURL().subscribe(data=>{
      url=data
      // console.log(data)
    }))
    return url
  }
}
