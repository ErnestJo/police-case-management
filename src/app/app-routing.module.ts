import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layout/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostComponent } from './modules/post/post.component';
import { CaseComponent } from './modules/case/case.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{
  path:'login',
  component: LoginComponent,
  children: [{
    path:'',
    component: DashboardComponent ,
    },
    {
    path: 'posts',
    component: PostComponent,
    },
    {
      path: 'case',
   component: CaseComponent,  
    }],
  
  
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
