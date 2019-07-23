import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./component/login/login.component";
import { DashboardComponent } from "./component/dashboard/dashboard.component";
import { AddMemberComponent } from "./component/add-member/add-member.component";
import { ViewListComponent } from "./component/view-list/view-list.component";
import { BackgroundComponent } from "./component/background/background.component";
import { TLDashboardComponent } from "./component/tldashboard/tldashboard.component";
import { DdDashboardComponent } from "./component/dd-dashboard/dd-dashboard.component";
import { ResetPasswordComponent } from "./component/reset-password/reset-password.component";
import { CreateProjectComponent } from "./component/create-project/create-project.component";
import { ViewProjectsComponent } from "./component/view-projects/view-projects.component";
import { ViewTaskComponent } from "./component/view-task/view-task.component";
import { CreateTaskComponent } from "./component/create-task/create-task.component";
import { ViewMemberDetailComponent } from "./component/view-member-detail/view-member-detail.component";
const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'pmdashboard', component: DashboardComponent, children: [
      {
        path: '', component: BackgroundComponent

      }, {
        path: 'add', component: AddMemberComponent
      },
      {
        path: 'list', component: ViewListComponent
      },
      {
        path: 'create', component: CreateProjectComponent
      },
      {
        path: 'view', component: ViewProjectsComponent
      },
      {
        path: 'task', component: ViewTaskComponent
      },
      {
        path: 'createtask', component: CreateTaskComponent
      },
    ]
  },
  {
    path: 'tldashboard', component: TLDashboardComponent, children: [
      {
        path: 'list', component: ViewMemberDetailComponent
      },
      {
        path: 'view', component: ViewProjectsComponent
      },
      {
        path: 'task', component: ViewTaskComponent
      },
    ]
  },
  { path: 'dddashboard', component: DdDashboardComponent },
  { path: 'reset', component: ResetPasswordComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
