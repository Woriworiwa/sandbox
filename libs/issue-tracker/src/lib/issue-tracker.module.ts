import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssueListComponent } from './issue-list.component';
import {RouterModule} from "@angular/router";
import { ClarityModule } from '@clr/angular';
import { IssueReportComponent } from './issue-report.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ConfirmDialogComponent } from './confirm-dialog.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: IssueListComponent }
    ]),
    CommonModule,
    ClarityModule,
    ReactiveFormsModule,

  ],
  declarations: [IssueListComponent, IssueReportComponent, ConfirmDialogComponent],
})
export class IssueTrackerModule {}
