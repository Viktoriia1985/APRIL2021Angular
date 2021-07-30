import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IPost} from "../models/IPost";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'http://jsonplaceholder.typicode.com/posts'

  constructor(private httpClient: HttpClient) {
    console.log('post service instance created')
  }


  getAllPosts(): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(this.url)
  }

  getPostById(id: number): Observable<IPost> {
    return this.httpClient.get<IPost>(this.url + '/' + id);
  }
}
