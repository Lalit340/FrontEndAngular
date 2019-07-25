import { Component, OnInit } from '@angular/core';
import { HttpServerService } from "../../service/http-server.service";
import { MatSnackBar } from "@angular/material";
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
  displayedColumns: string[] = ['id', 'name', 'mail', 'mobileNo', 'designation', 'asign task'];
  constructor(
    private http: HttpServerService,
    private snackBar : MatSnackBar,
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.mail = localStorage.getItem('mail');
    this.http.get('getProject?mail=' + this.mail).subscribe(
      (response: any) => {

        this.userInfo = response;
        for (let index = 0; index < this.userInfo.length; index++) {
          const element = this.userInfo[index];
          this.userData = element.userModel

        }
      }
    )
  }

  getTask(element) {
    this.data = element;
    this.http.get('getalltasks').subscribe(
      (response: any) => {
        this.taskList = response;
      }
    )
  }

  onClick(items){
    this.http.put('asigntaskToUser?eid=' +  this.data.id + '&tid=' + items.tid ,null).subscribe(
      (response : any) =>{
        if(response.statusCode == 200){
          this.snackBar.open(response.statusMessage , 'close' ,{duration:3000});
        }else{
          this.snackBar.open(response.statusMessage , 'close' ,{duration:3000});
        }
      }
    )
  }

}
