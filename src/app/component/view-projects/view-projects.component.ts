import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpServerService } from "../../service/http-server.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatDialog } from "@angular/material/dialog";
import { DialogEditProjectsComponent } from '../dialog-edit-projects/dialog-edit-projects.component';
import { DialogAsignTaskComponent } from '../dialog-asign-task/dialog-asign-task.component';

@Component({
  selector: 'app-view-projects',
  templateUrl: './view-projects.component.html',
  styleUrls: ['./view-projects.component.scss']
})
export class ViewProjectsComponent implements OnInit {
   projectList : any; 

  constructor(
    private router: Router,
    private http: HttpServerService,
    private snackBar: MatSnackBar,
    private dialog : MatDialog,
  ) { }

  ngOnInit() {
    this.getProjects();
    
  }

  getProjects(){
     this.http.get('getallprojs').subscribe(
       (response : any) =>{
         this.projectList = response;
       }
     )
  }
  editProject(items){
    this.dialog.open(DialogEditProjectsComponent ,{
      data : {items}
    });
  }

  deleteProject(items){
    this.http.delete('deleteProj/'+items.pid).subscribe(
      (response : any) =>{
        this.snackBar.open(response.statusMessage , 'close' ,{duration : 3000});
      }
    )
  }

  asignTask(items){
    this.dialog.open(DialogAsignTaskComponent ,{
      data : {items}
    });
  }
}
