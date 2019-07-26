import { Component, OnInit } from '@angular/core';
import { HttpServerService } from "../../service/http-server.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatDialog } from "@angular/material/dialog";
import { DialodBoxComponent } from '../dialod-box/dialod-box.component';
import { DataServiceService } from "src/app/service/data-service.service";


@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.scss']
})
export class ViewListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'mail', 'mobileNo', 'designation', 'asign project' ,'delete' , 'edit'];
  userInfo: any;
  id: number;
  projects: any;
  data: any;
  message : any;

  constructor(
    private http: HttpServerService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    private service : DataServiceService,
  ) { }

  ngOnInit() {
    this.service.currentMessage.subscribe(
     ( message : any)=>{
         this.message = message;
         this.getData();
      }
    )
  }

  getData() {
    this.http.get('usersinfo').subscribe(
      (response: any) => {
        this.userInfo = response;
      }
    )
  }

  edit(items) {
    this.dialog.open(DialodBoxComponent, {
      data: { items }
    });
  }
  delete(items) {
    this.http.delete("deleteUser/" + items.id).subscribe(
      (response: any) => {
        if (response.status == 200) {
          this.snackBar.open(response.statusMessage, "close", { duration: 3000 });
          this.service.changeMessage(response.statusMessage);
        }else{
          this.snackBar.open(response.statusMessage, "close", { duration: 3000 });
          this.service.changeMessage(response.statusMessage);
        }
      }
    )
  }

  // asignProjects(items) {
  //   this.dialog.open(DialogBoxAsignProjectsComponent, {
  //     data: { items }
  //   });
  // }

  getProjects(element) {
    this.data = element;
    this.http.get('getAllProjects').subscribe(
      (response: any) => {
        this.projects = response;
        console.log("hi ",this.projects);
        
      }
    )
  }

  onClick(items) {
    this.http.put('assignProject?pid=' + items.pid + '&eid=' + this.data.id, null).subscribe(
      (response: any) => {
        if (response.statusCode == 200) {
          this.snackBar.open(response.statusMessage, "close", { duration: 3000 });
          this.service.changeMessage(response.statusMessage);
        } else {
          this.snackBar.open(response.statusMessage, "close", { duration: 3000 });
          this.service.changeMessage(response.statusMessage);
        }
      }
    )
  }
}
