import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';

import { IPost } from 'src/app/models/Post';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  post: IPost;
  constructor(private  router: Router, private activatedRoute: ActivatedRoute) {
    // console.log(history.state);

    // this.activatedRoute.params.subscribe(value => {
    //   this.post = this.router.getCurrentNavigation()?.extras.state as IPost;
    // })    /* для дочірніх url*/

    this.post = this.router.getCurrentNavigation()?.extras.state as IPost;
  }

  ngOnInit(): void {
  }

  back() {
    history.back()
  }

}
