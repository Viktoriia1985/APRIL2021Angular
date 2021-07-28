import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {
  PostComponent,
  PostDetailsComponent,
  PostsComponent,
  UserComponent,
  UserDetailsComponent,
  UsersComponent
} from './components';
import {UserGuardService} from './services';
import {PostGuardService} from "./services/post-guard.service";


let routes: Routes = [
  {
    path: '',
    component: PostsComponent,
    canDeactivate: [PostGuardService]
  },
  {
    path: 'posts/:id',
    component: PostDetailsComponent,
    canActivate: [PostGuardService],
    canDeactivate: [PostGuardService]
  },
  {
    path: 'posts',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '',
    component: UsersComponent,
    canDeactivate: [UserGuardService]
  },
  {
    path: 'users/:id',
    component: UserDetailsComponent,
    canActivate: [UserGuardService],
    canDeactivate: [UserGuardService]
  },
  {
    path: 'users',
    redirectTo: '',
    pathMatch: 'full'
  },

];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    UserDetailsComponent,
    PostsComponent,
    PostComponent,
    PostDetailsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
