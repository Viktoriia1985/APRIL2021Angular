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

  myForm: FormGroup;
  posts: IPost[];
  post: IPost;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.myForm = new FormGroup({
      postId: new FormControl('')
      }
    );
    this.postService.getPosts().subscribe(value => this.posts = value);
  }

  save() {
    this.postService.getPostById(this.myForm.controls.postId.value).subscribe(value => this.post = value);
  }


}
