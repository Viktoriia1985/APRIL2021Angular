import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IUser} from "../models/iUser";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  user: IUser;


  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) {
    this.activatedRoute.params.subscribe(({id}) => {
      this.userService.getUserById(id).subscribe(value => this.user =value);
    });
  }

  ngOnInit(): void {
  }

}
