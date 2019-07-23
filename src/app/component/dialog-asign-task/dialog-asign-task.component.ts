import { Component, OnInit ,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { HttpServerService } from "../../service/http-server.service";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-dialog-asign-task',
  templateUrl: './dialog-asign-task.component.html',
  styleUrls: ['./dialog-asign-task.component.scss']
})
export class DialogAsignTaskComponent implements OnInit {

  taskList : any ;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private http: HttpServerService,
    private snackBar: MatSnackBar,
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

  addProjects(list) {
     this.http.put('asigntask?pid='+this.data.items.pid+'&tid='+list.tid,null).subscribe(
      (response: any) => {
        if(response.statusCode == 200){
          this.snackBar.open(response.statusMessage , 'close' ,{duration: 2500});
        }else{
          this.snackBar.open(response.statusMessage , 'close' ,{duration: 3000});
        }
      }
     )
  }

}
