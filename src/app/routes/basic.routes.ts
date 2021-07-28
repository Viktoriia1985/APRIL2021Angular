import {UsersComponent} from "../users/users.component";
import {PostsComponent} from "../posts/posts.component";

export let routes = [
  {path: 'users', component: UsersComponent}, /* шлях в app component*/
  {path: 'posts', component: PostsComponent}
];
