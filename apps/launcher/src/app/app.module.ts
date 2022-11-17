import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import {RouterModule} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    RouterModule.forRoot([
      { path: 'issue-tracker', loadChildren: () => import('@sandbox/issue-tracker').then(m => m.IssueTrackerModule) },{ path: '', pathMatch: 'full', redirectTo: 'issue-tracker' }
    ])],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
