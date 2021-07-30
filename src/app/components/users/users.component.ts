import {Component, OnInit} from '@angular/core';

import {UserService} from "../../services";
import {IUser} from "../../models";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: IUser[];

  constructor(private userService: UserService) {
  }


  //seEffect with deps []
  ngOnInit(): void {

this.userService.getAllUsers().subscribe(value => this.users=value);

    }
}
