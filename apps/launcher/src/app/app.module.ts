import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot([
      { path: 'issue-tracker', loadChildren: () => import('@sandbox/issue-tracker').then(m => m.IssueTrackerModule) },{ path: '', pathMatch: 'full', redirectTo: 'issue-tracker' }
    ])],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
