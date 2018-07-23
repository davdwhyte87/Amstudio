import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {AngularFireAuth} from 'angularfire2/auth';
import { auth } from 'firebase/app';
import { AuthService } from './auth.service';
import { stringify } from '@angular/compiler/src/util';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  user:any;
  constructor(public fauth:AngularFireAuth, public router:Router){}


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    var a=this.fauth.user.subscribe(user=>{
      this.user=user
      if(!user){
        this.router.navigate(['/login'])
      }
      if(user.email!=environment.admin_email){
        console.log(user.email+"number")
        this.router.navigate(['/login'])
      }
    })
    return true;
  }
}
