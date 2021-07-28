import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';

import { IPost } from 'src/app/models/Post';
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  post: IPost;
  constructor(private  router: Router, private activatedRoute: ActivatedRoute, private postService: PostService) {
    // console.log(history.state);

    // this.activatedRoute.params.subscribe(value => {
    //   this.post = this.router.getCurrentNavigation()?.extras.state as IPost;
    // })    /* для дочірніх url*/

    this.post = this.router.getCurrentNavigation()?.extras.state as IPost;
  }

  ngOnInit(): void {
    console.log(this.post)
    if (!this.post) {
      this.activatedRoute.params.subscribe(({id}) => {
        this.postService.getPostById(id).subscribe(value => this.post = value);
      })
    }
  }

  back() {
    history.back()
  }

}
