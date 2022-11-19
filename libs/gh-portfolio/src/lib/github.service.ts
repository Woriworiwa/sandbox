import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { User } from './user';
import {environment} from "../assets/constants";
import { Repository } from './repository';



@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private userUrl: string = '';

  constructor(private http: HttpClient) {
    this.userUrl = `${environment.githubApiUrl}/users/${environment.githubUserName}`;
  }

  getUser(): Observable<User> {
    return this.http.get<User>(this.userUrl);
  }

  getRepos(): Observable<Repository[]> {
    return this.http.get<Repository[]>(this.userUrl + `/repos`);
  }
}
