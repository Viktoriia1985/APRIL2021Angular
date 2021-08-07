import {Component, OnInit} from '@angular/core';
import { IUser } from 'src/app/models/User';
import {UserService} from "../../services";

@Component({
  selector: 'app-td-form',
  templateUrl: './td-form.component.html',
  styleUrls: ['./td-form.component.scss']
})
export class TdFormComponent implements OnInit {

  users: IUser[];
  user: IUser;
  userId: number;


  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(value => this.users = value);
  }

  save() {
    this.userService.getUserById(this.userId).subscribe(value => this.user = value);
  }

}
