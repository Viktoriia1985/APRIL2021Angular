import {Routes} from "@angular/router";
import {PostDetailsComponent, PostsComponent, UserDetailsComponent, UsersComponent} from "../components";


export let routes:Routes = [
  {
    path: 'users',
    component: UsersComponent,
    children: [
      // /users/:id
      {path: ':id', component: UserDetailsComponent}
    ]
  }, /* шлях в app component*/


  // {path: 'posts', component: PostsComponent},
  // {path: 'posts/:id', component: PostDetailsComponent},

  {path: 'posts',
    component: PostsComponent,
      children: [
        {path: ':id', component: PostDetailsComponent},
      ]
  },
];
