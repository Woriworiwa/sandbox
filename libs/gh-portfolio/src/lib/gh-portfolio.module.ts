import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import { PersonalInfoComponent } from './personal-info.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      { path: '', component: PortfolioComponent }
    ]),],
  declarations: [
    PortfolioComponent,
    PersonalInfoComponent
  ],
})
export class GhPortfolioModule {}
