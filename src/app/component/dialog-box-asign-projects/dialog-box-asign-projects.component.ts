import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { HttpServerService } from "../../service/http-server.service";
import { MatSnackBar } from "@angular/material/snack-bar";


@Component({
  selector: 'app-dialog-box-asign-projects',
  templateUrl: './dialog-box-asign-projects.component.html',
  styleUrls: ['./dialog-box-asign-projects.component.scss']
})
export class DialogBoxAsignProjectsComponent implements OnInit {
  projectList: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private http: HttpServerService,
    private snackBar: MatSnackBar,


  ) { }

  ngOnInit() {
    this.getProjects();
  }
  getProjects() {
    this.http.get('getallprojs').subscribe(
      (response: any) => {
        this.projectList = response;
      }
    )
  }

  addProjects(list) {
     this.http.put('asignProj?eid='+this.data.items.id+'&pid='+list.pid,null).subscribe(
      (response: any) => {
        if(response.statusCode == 200){
          this.snackBar.open(response.statusMessage , 'close' ,{duration: 2500});
        }
      }
     )
  }

}
