import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {IUser} from "../../models/User";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  user: IUser;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
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
  }

  back() {
    history.back();
  }

}
