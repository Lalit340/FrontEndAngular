import { Component, OnInit } from '@angular/core';
import { HttpServerService } from "../../service/http-server.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatDialog } from "@angular/material/dialog";
import { DialogEditTaskComponent } from '../dialog-edit-task/dialog-edit-task.component';

@Component({
  selector: 'app-view-projects',
  templateUrl: './view-projects.component.html',
  styleUrls: ['./view-projects.component.scss']
})
export class ViewProjectsComponent implements OnInit {
   projectList : any; 
   taskList : any ;
   displayedColumns: string[] = ['id', 'name', 'description','edit' , 'delete'];
   project : any ;

  constructor(
    private http: HttpServerService,
    private snackBar: MatSnackBar,
    private dialog : MatDialog,
  ) { }

  ngOnInit() {
    this.getProjects();
    
  }

  getProjects(){
     this.http.get('getAllProjects').subscribe(
       (response : any) =>{
         this.projectList = response;
       }
     )
  }
  editTask(element){
    this.dialog.open(DialogEditTaskComponent ,{
      data : {element}
    });
  }

  deleteTask(element){
    this.http.delete('removeTaskfromProj?pid='+this.project.pid+'&tid='+element.tid).subscribe(
      (response : any) =>{
        this.snackBar.open(response.statusMessage , 'close' ,{duration : 3000});
      }
    )
  }

  getProjectTask(items){
    this.project = items ;
    this.http.get('getProjectTask?pid='+items.pid).subscribe(
      (response : any) =>{
        this.taskList = response;
      }
    )
  }
}
