import { Component, OnInit } from '@angular/core';
import { HttpServerService } from "../../service/http-server.service";
import { MatSnackBar } from "@angular/material";
import { DataServiceService } from "../../service/data-service.service";
@Component({
  selector: 'app-view-member-detail',
  templateUrl: './view-member-detail.component.html',
  styleUrls: ['./view-member-detail.component.scss']
})
export class ViewMemberDetailComponent implements OnInit {
  userInfo: any;
  mail: string;
  userData: any;
  data: any;
  taskList: any;
  projectList: any;
  project: any;
  message:string;
  displayedColumns: string[] = ['id', 'name', 'mail', 'mobileNo', 'designation', 'asign task'];
  constructor(
    private http: HttpServerService,
    private snackBar: MatSnackBar,
    private service :DataServiceService,
  ) { }

  ngOnInit() {
    this.getData();
    this.service.currentMessage.subscribe(message => this.message = message);

  }

  getUsers(items) {
    this.project = items;
    this.mail = localStorage.getItem('mail');
    this.http.get('getOneProjects?pid='+items.pid).subscribe(
      (response: any) => {

        this.userInfo = response.userModel;
        console.log(" usdser ", this.userInfo);
        
        // for (let index = 0; index < this.userInfo.length; index++) {
        //   const element = this.userInfo[index];
        //   this.userData = element.userModel

        // }
      }
    )
  }

  // getTask(element) {
  //   this.data = element;
  //   this.http.get('getalltasks').subscribe(
  //     (response: any) => {
  //       this.taskList = response;
  //     }
  //   )
  // }

  onClick(items) {
    this.http.put('asigntaskToUser?eid=' + this.data.id + '&tid=' + items.tid, null).subscribe(
      (response: any) => {
        if (response.statusCode == 200) {
          this.snackBar.open(response.statusMessage, 'close', { duration: 3000 });
        } else {
          this.snackBar.open(response.statusMessage, 'close', { duration: 3000 });
        }
      }
    )
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

  getProjectTask(element) {
    this.data = element;
    this.http.get('getProjectTask?pid=' + this.project.pid).subscribe(
      (response: any) => {
        this.taskList = response;
      }
    )
  }
  onEvent(event) {
    event.stopPropagation();
  }
}
