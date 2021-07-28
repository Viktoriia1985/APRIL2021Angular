import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {UsersComponent} from './users/users.component';
import {PostsComponent} from './posts/posts.component';
import {HttpClientModule} from "@angular/common/http";
import {routes} from "./routes/basic.routes";
import {UserComponent} from './user/user.component';
import { UserDetailsComponent } from './user-details/user-details.component';



@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PostsComponent,
    UserComponent,
    UserDetailsComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
