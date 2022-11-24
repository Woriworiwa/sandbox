import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './core/table.component';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [CommonModule,
    RouterModule.forChild([
      { path: '', component: TableComponent }
    ]),
  ],
  declarations: [
    TableComponent
  ],
})
export class Pro9AdvancedModule {}
