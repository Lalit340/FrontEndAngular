import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./component/login/login.component";
import { DashboardComponent } from "./component/dashboard/dashboard.component";
import { AddMemberComponent } from "./component/add-member/add-member.component";
import { ViewListComponent } from "./component/view-list/view-list.component";
import { BackgroundComponent } from "./component/background/background.component";
const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'dashboard', component: DashboardComponent, children: [
      {
        path: '', component: BackgroundComponent

      }, {
        path: 'add', component: AddMemberComponent
      },
      {
        path: 'list', component: ViewListComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
