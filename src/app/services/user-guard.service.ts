import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserGuardService implements CanDeactivate <any>, CanActivate  {

  constructor() {
  }

  // prevent  / -> /users/1
  canDeactivate(component: any, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // console.log(component);
    // console.log(currentRoute);
    // console.log(currentState);
    // console.log(nextState);

    // return false or true;
    return confirm(`do you want to leave  from ${currentState.url} to ${nextState?.url}?`)
  }   // push "ctrl+i" for creating method


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return +route.params.id <= 10 && +route.params.id > 0;
  }

}
