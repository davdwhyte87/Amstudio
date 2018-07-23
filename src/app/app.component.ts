import { Component } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import { Observable } from 'rxjs';
import {AngularFireAuth} from 'angularfire2/auth';
import { auth } from 'firebase/app';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  projects:any[];
  user:any;
  constructor(public db:AngularFireDatabase,public fauth:AngularFireAuth){
    console.log(this.fauth.user.subscribe(user=>{this.user=user; console.log(this.user.email)}));
    //readin
    db.list('projects')
    .valueChanges().subscribe(projects=>{
      this.projects=projects;
      console.log(this.projects);
    });
    // console.log(this.projects);
  }

  postProject(){
     //writing 
    const ref=this.db.list('projects');
    ref.push({name:"david",link:"lskclskls.php"});
  }

  signin(){
    this.fauth.auth.signInWithRedirect(new auth.GoogleAuthProvider());
    console.log(this.fauth.auth.currentUser);
  }

}
