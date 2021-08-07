import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {PostDetailsComponent, TdFormComponent, UserDetailsComponent,} from './components';
import { ReactiveFormComponent } from './components';


@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    PostDetailsComponent,
    TdFormComponent,
    ReactiveFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
