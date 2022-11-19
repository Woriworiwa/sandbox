import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import {RouterModule} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'portfolio', loadChildren: () => import('@sandbox/gh-portfolio').then(m => m.GhPortfolioModule) },
      { path: 'issue-tracker', loadChildren: () => import('@sandbox/issue-tracker').then(m => m.IssueTrackerModule) },
      { path: '', pathMatch: 'full', redirectTo: 'portfolio' }
    ])],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
