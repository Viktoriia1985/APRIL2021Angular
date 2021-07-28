import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { UserService } from 'src/app/services/user.service';

import {IUser} from "../../models/User";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  user: IUser;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private userService: UserService) {
    // console.log(history.state);
    this.user = this.router.getCurrentNavigation()?.extras.state as IUser;
  }
// OR

  //   this.activatedRoute.params.subscribe(value => {
  //     this.user = this.router.getCurrentNavigation()?.extras.state as IUser;
  //   })
  //
  // }           /* this method uses for nested/children component */

  ngOnInit(): void {
    console.log(this.user)
    if(!this.user) {
      this.activatedRoute.params.subscribe(({id}) => {
        this.userService.getUserById(id).subscribe(value => this.user = value);
      })
    }
  }

  back() {
    history.back();
  }

}
