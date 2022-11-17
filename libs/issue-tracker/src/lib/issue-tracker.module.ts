import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssueListComponent } from './issue-list.component';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: IssueListComponent }
    ])
  ],
  declarations: [IssueListComponent],
})
export class IssueTrackerModule {}
