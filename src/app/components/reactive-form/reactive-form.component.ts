import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

import {IPost} from "../../models";
import {PostService} from "../../services";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  posts: IPost[];
  post: IPost;
  postId: number;

  postName = new FormControl('');

  myForm: FormGroup = new FormGroup(
    {
      postName: this.postName,
    }
  );

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(value => this.posts = value);
  }

  save() {
    this.postService.getPostById(this.postId).subscribe(value => this.post = value);
    // console.log(this.myForm)
  }


}
