import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthGuardService } from './auth-guard.service';


@Injectable({
  providedIn: 'root'
})


export class AuthGuardGuard implements CanActivate {

  constructor(private authGuardService: AuthGuardService, private router: Router) {}

  canActivate( ):boolean
    //route: ActivatedRouteSnapshot,
    //state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
    { if (!this.authGuardService.gettoken())
      {
        this.router.navigateByUrl("/login")
      }
    return this.authGuardService.gettoken();
  }
  
}
