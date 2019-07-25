import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpServerService } from "../../service/http-server.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatDialog } from "@angular/material/dialog";
import { DialogEditTaskComponent } from '../dialog-edit-task/dialog-edit-task.component';
import { DialogAsignTaskComponent } from '../dialog-asign-task/dialog-asign-task.component';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.scss']
})
export class ViewTaskComponent implements OnInit {
  taskList: any;
  displayedColumns: string[] = ['id', 'name', 'Description', 'asignTaskToProj', 'edit', 'delete'];
  projects: any;
  data: any;

  constructor(
    private router: Router,
    private http: HttpServerService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.getTask();
  }

  getTask() {
    this.http.get('getalltasks').subscribe(
      (response: any) => {
        this.taskList = response;
      }
    )
  }

  editTask(element) {
    this.dialog.open(DialogEditTaskComponent, {
      data: { element }
    });
  }

  deleteTask(element) {
    console.log(element);

    this.http.delete('deletetask/' + element.tid).subscribe(
      (response: any) => {
        this.snackBar.open(response.statusMessage, 'close', { duration: 3000 });
      }
    )
  }


  asignTask(element) {
    this.data = element;
    this.http.get('getAllProjects').subscribe(
      (response: any) => {
        this.projects = response;
      }
    )
  }
  onClick(items) {
    this.http.put('asigntask?pid=' +items.pid + '&tid=' + this.data.tid,null).subscribe(
      (response : any)=>{
        if(response.statusCode == 200){
          this.snackBar.open(response.statusMessage, 'close', { duration: 3000 });
        }else{
          this.snackBar.open(response.statusMessage, 'close', { duration: 3000 });
        }
      }
    )
  }

}
