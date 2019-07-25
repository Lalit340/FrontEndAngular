import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpServerService } from "../../service/http-server.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: 'app-add-task-to-project',
  templateUrl: './add-task-to-project.component.html',
  styleUrls: ['./add-task-to-project.component.scss']
})
export class AddTaskToProjectComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'description', 'asign task'];
  projectInfo: any;
  mail: string;
  data: any;
  taskList: any;
  constructor(
    private router: Router,
    private http: HttpServerService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.mail = localStorage.getItem('mail');
    this.http.get('getProject?mail=' + this.mail).subscribe(
      (response: any) => {
        this.projectInfo = response;
      }
    )
  }


  onClick(items) {
      this.http.put('asigntask?pid=' +this.data.pid + '&tid=' + items.tid ,null).subscribe(
        (response : any) =>{
          if(response.statusCode == 200){
            this.snackBar.open(response.statusMessage , 'close' ,{duration:3000});
          }else{
            this.snackBar.open(response.statusMessage , 'close' ,{duration:3000});
          }
        }
      )

  }



  send(element) {
    this.data = element;
    this.http.get('getalltasks').subscribe(
      (response : any) => {
        this.taskList = response;
      }
    )
  }

}
