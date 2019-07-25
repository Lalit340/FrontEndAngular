import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpServerService } from "../../service/http-server.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatDialog } from "@angular/material/dialog";
import { DialogEditTaskComponent } from '../dialog-edit-task/dialog-edit-task.component';

@Component({
  selector: 'app-view-tl-project',
  templateUrl: './view-tl-project.component.html',
  styleUrls: ['./view-tl-project.component.scss']
})
export class ViewTlProjectComponent implements OnInit {
  projectList: any;
  mail: string;
  taskList: any;
  project : any ;
  displayedColumns: string[] = ['id', 'name', 'description','edit' , 'delete'];

  constructor(
    private router: Router,
    private http: HttpServerService,
    private snackBar: MatSnackBar,
    private dialog : MatDialog,

  ) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.mail = localStorage.getItem('mail');
    this.http.get('getProject?mail=' + this.mail).subscribe(
      (response: any) => {
        console.log(" hellow ", response);
        this.projectList = response;
      }
    )
  }

  getProjectTask(items){
    this.project = items;
    this.http.get('getProjectTask?pid='+items.pid).subscribe(
      (response : any) =>{
        this.taskList = response;
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
}
