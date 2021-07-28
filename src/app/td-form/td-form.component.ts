import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-td-form',
  templateUrl: './td-form.component.html',
  styleUrls: ['./td-form.component.scss']
})
export class TdFormComponent implements OnInit {

  user =
    {
      username: 'vasya',
      password: '1111',
      status: true,
      gender: 'male',
      level: []
    }

  constructor() {
    setTimeout(() => {
      this.user.username = 'viktoriia';
    },2000)
  }

  ngOnInit(): void {
  }

  save(tref: HTMLFormElement) {
    // console.log(tref);
    // console.log(tref.username.value);
    // console.log(tref.password.value);
    console.log(this.user)
  }

}
