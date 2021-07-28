import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {UserComponent, UserDetailsComponent, UsersComponent} from './components';
import { UserGuardService } from './services';


let routes: Routes = [
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
    pathMatch: 'full'},

];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    UserDetailsComponent,
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
