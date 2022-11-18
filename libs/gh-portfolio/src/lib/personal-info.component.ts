import { Component, OnInit } from '@angular/core';
import {GithubService} from "./github.service";
import {Observable} from "rxjs";
import {User} from "./user";

@Component({
  selector: 'sandbox-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {

  user$: Observable<User> | undefined;

  constructor(private gitHubService: GithubService) { }

  ngOnInit(): void {
    this.user$ = this.gitHubService.getUser();
  }

}
