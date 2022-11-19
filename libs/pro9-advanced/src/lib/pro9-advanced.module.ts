import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './core/table.component';
import {RouterModule} from "@angular/router";
import {IssueListComponent} from "../../../issue-tracker/src/lib/issue-list.component";

@NgModule({
  imports: [CommonModule,
    RouterModule.forChild([
      { path: '', component: IssueListComponent }
    ]),
  ],
  declarations: [
    TableComponent
  ],
})
export class Pro9AdvancedModule {}
