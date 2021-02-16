import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { PersonalDetailsViewComponent } from 'src/app/modules/post/Rb/personal-details-view/personal-details-view.component'
import { CaseComponent } from 'src/app/modules/case/case.component';
import { RouterModule } from '@angular/router';
import { PostComponent } from 'src/app/modules/post/post.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';



@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostComponent,
    CaseComponent,
    PersonalDetailsViewComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    
  ]
})
export class DefaultModule { }
