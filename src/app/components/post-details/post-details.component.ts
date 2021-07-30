import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {IPost} from "../../models";
import {PostService} from "../../services";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent {

  post: IPost;

  constructor(private activatedRoute: ActivatedRoute, private postService: PostService)  {
    this.activatedRoute.params.subscribe(({id}) => {
      this.postService.getPostById(id).subscribe(value => this.post =value);
    });
  }

}
