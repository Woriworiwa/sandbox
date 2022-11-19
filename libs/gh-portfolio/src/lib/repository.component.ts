import { Component, OnInit } from '@angular/core';
import {map, Observable} from "rxjs";
import { GithubService } from './github.service';
import { Repository } from './repository';

@Component({
  selector: 'sandbox-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.scss']
})
export class RepositoryComponent implements OnInit {

  repos$: Observable<Repository[]> | undefined;

  constructor(private githubService:GithubService) { }

  ngOnInit(): void {
    this.repos$ = this.githubService.getRepos()
      .pipe(
        map(repos => repos.filter(repo => !repo.fork))
      )
  }
}
