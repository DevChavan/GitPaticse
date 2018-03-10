import {ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";

@Injectable()
// Auth Guard Class name
export class AuthGuard implements CanActivate{
  constructor(private router:Router){}

  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
    console.log(route);
    //console.log(state);
    //check the Local storage for current user
    if(localStorage.getItem('currentUser')){
      return true;
    }
    // router navigate to login
    this.router.navigate(['/login']);
  }
}
