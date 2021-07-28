import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import { Observable } from 'rxjs/internal/Observable';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UserResolveService implements Resolve<any>{

  constructor(private userService: UserService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    return this.userService.getUsers();
  }

  // resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
  //   return new Promise((res, reject) => {
  //     setTimeout(()=> {
  //       res(this.userService.getUsers())
  //     }, 3000);
  //   });
  // }
}
