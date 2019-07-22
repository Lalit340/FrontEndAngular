import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  MatIconModule, MatButtonModule, MatInputModule, MatToolbarModule,
  MatSidenavModule, MatListModule, MatDividerModule, MatExpansionModule
} from '@angular/material';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AddMemberComponent } from './component/add-member/add-member.component';
import { ViewListComponent } from './component/view-list/view-list.component';
import { BackgroundComponent } from './component/background/background.component';
import { TLDashboardComponent } from './component/tldashboard/tldashboard.component';
import { DdDashboardComponent } from './component/dd-dashboard/dd-dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';
import { CreateProjectComponent } from './component/create-project/create-project.component';
import { ViewProjectsComponent } from './component/view-projects/view-projects.component';
import { ViewTaskComponent } from './component/view-task/view-task.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DialodBoxComponent } from './component/dialod-box/dialod-box.component';
import { DialogBoxAsignProjectsComponent } from './component/dialog-box-asign-projects/dialog-box-asign-projects.component';
import { DialogEditProjectsComponent } from './component/dialog-edit-projects/dialog-edit-projects.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AddMemberComponent,
    ViewListComponent,
    BackgroundComponent,
    TLDashboardComponent,
    DdDashboardComponent,
    ResetPasswordComponent,
    CreateProjectComponent,
    ViewProjectsComponent,
    ViewTaskComponent,
    DialodBoxComponent,
    DialogBoxAsignProjectsComponent,
    DialogEditProjectsComponent,
  ],
  entryComponents: [DialodBoxComponent ,DialogBoxAsignProjectsComponent ,DialogEditProjectsComponent ,],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    MatCardModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatSidenavModule,
    MatListModule,
    MatDividerModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
