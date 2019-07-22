import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpServerService } from "../../service/http-server.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatDialog } from "@angular/material/dialog";
import { DialodBoxComponent } from '../dialod-box/dialod-box.component';
import { DialogBoxAsignProjectsComponent } from '../dialog-box-asign-projects/dialog-box-asign-projects.component';


@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.scss']
})
export class ViewListComponent implements OnInit {
  userInfo: any;
  id: number;

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
        }
      }
    )
  }

  asignProjects(items) {
    this.dialog.open(DialogBoxAsignProjectsComponent, {
      data: { items }
    });
  }

}
