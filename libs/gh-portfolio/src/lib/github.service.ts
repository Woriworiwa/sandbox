import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { User } from './user';
import {environment} from "../assets/constants";


@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

  getUser(): Observable<User> {
    return this.http.get<User>(`${environment.githubApiUrl}/users/${environment.githubUserName}`);
  }
}
