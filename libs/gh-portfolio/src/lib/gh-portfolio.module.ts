import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import { PersonalInfoComponent } from './personal-info.component';
import { PanelComponent } from './panel.component';
import { RepositoryComponent } from './repository.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      { path: '', component: PortfolioComponent }
    ]),],
  declarations: [
    PortfolioComponent,
    PersonalInfoComponent,
    PanelComponent,
    RepositoryComponent
  ],
})
export class GhPortfolioModule {}
