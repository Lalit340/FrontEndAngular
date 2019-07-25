import { Component, OnInit } from '@angular/core';
import { HttpServerService } from "../../service/http-server.service";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-view-dd-task',
  templateUrl: './view-dd-task.component.html',
  styleUrls: ['./view-dd-task.component.scss']
})
export class ViewDdTaskComponent implements OnInit {

  taskList: any;
  displayedColumns: string[] = ['id', 'name', 'status','Description', 'change status'];
  mail: string;
  constructor(
    private http: HttpServerService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.getTask();
  }

  getTask() {
    this.mail = localStorage.getItem('mail');
    this.http.get('getUserTask?mail=' + this.mail).subscribe(
      (response: any) => {
        this.taskList = response;
      }
    )
  }

  onClick(element){
    this.http.put('changeStatus?tid='+element.tid ,null).subscribe(
      (response : any) =>{
        if(response.statusCode == 200){
          this.snackBar.open(response.statusMessage , 'close' , {duration :3000});
        }else{
          this.snackBar.open(response.statusMessage , 'close' , {duration :3000});
        }
      }
    )
  }
}
