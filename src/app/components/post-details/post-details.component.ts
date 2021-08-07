import {Component, Input, OnInit} from '@angular/core';
import {IPost} from 'src/app/models/Post';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent {
  @Input()
  post: IPost;
}
