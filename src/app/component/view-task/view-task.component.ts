import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpServerService } from "../../service/http-server.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatDialog } from "@angular/material/dialog";
import { DialogEditTaskComponent } from '../dialog-edit-task/dialog-edit-task.component';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.scss']
})
export class ViewTaskComponent implements OnInit {
  taskList : any; 

  constructor(
    private router: Router,
    private http: HttpServerService,
    private snackBar: MatSnackBar,
    private dialog : MatDialog,
  ) { }

  ngOnInit() {
    this.getTask();
  }

  getTask(){
    this.http.get('getalltasks').subscribe(
      (response : any) =>{
        this.taskList = response;
      }
    )
 }

 editTask(items){
   this.dialog.open(DialogEditTaskComponent ,{
     data : {items}
   });
 }

 deleteTask(items){
   this.http.delete('deletetask/'+items.tid).subscribe(
    (response : any) =>{
      this.snackBar.open(response.statusMessage , 'close' ,{duration : 3000});
    }
   )
 }

}
