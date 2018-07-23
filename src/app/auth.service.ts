import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import { auth } from 'firebase/app';

interface User{
  email:string;
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authstate:any=null;
  user:User
  constructor(public fauth:AngularFireAuth) {
  }

  signin(){
    return  this.fauth.auth.signInWithRedirect(new auth.GoogleAuthProvider());
  }


}
