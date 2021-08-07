import {Component, Input} from '@angular/core';
import {IUser} from "../../models";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {
  @Input()
  user: IUser;
}
