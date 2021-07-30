import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {IPost} from "../../models";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {

  @Input()
  post: IPost;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {

  }

  navigateToPostDetails(): void {
    this.router.navigate([this.post.id], {relativeTo: this.activatedRoute})
  };
}
