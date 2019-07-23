import { Component, OnInit } from '@angular/core';
import { HttpServerService } from "../../service/http-server.service";

@Component({
  selector: 'app-view-member-detail',
  templateUrl: './view-member-detail.component.html',
  styleUrls: ['./view-member-detail.component.scss']
})
export class ViewMemberDetailComponent implements OnInit {
  userInfo : any ;
  displayedColumns: string[] = ['id', 'name', 'mail', 'mobileNo'];
  constructor(
    private http : HttpServerService ,
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.http.get('usersinfo').subscribe(
      (response: any) => {
        this.userInfo = response;
      }
    )
  }

}
