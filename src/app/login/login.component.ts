import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {AngularFireAuth} from 'angularfire2/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:any
  constructor(
    public fauth:AngularFireAuth,
    private router:Router,
    private auth_service:AuthService,
  ) {
    var a=this.fauth.user.subscribe(user=>{
      this.user=user
      if(user){
        console.log(user.email+"number")
        this.router.navigate(['/home'])
      }
    })
   }

  ngOnInit() {
  }

  signin(){
    var d=this.auth_service.signin().then(()=>{
      this.router.navigate(['/home']);
    });
    // if(d){
    //   this.router.navigate(['/home']);
    // }
    // this.fauth.auth.getRedirectResult().then(result=>{
    //   this.router.navigate(['/home']);
    // });
    console.log(d);
  }

}
