import { Component, OnInit } from '@angular/core';
import {environment} from "../../../../apps/launcher/src/environments/environment";

@Component({
  selector: 'sandbox-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  username = environment.githubUserName;

  constructor() { }

  ngOnInit(): void {
  }

}
