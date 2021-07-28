import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IUser} from "../models/iUser";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'http://jsonplaceholder.typicode.com/users'

  constructor(private httpClient: HttpClient) {
  }

  getAllUsers(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(this.url)
  }

  getUserById(id: number): Observable<IUser> {
    return this.httpClient.get<IUser>(this.url + '/' + id);
  }
}
