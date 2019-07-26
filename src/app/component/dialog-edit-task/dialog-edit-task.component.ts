import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Task } from "../../model/task";
import { HttpServerService } from "../../service/http-server.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataServiceService } from "src/app/service/data-service.service";

@Component({
  selector: 'app-dialog-edit-task',
  templateUrl: './dialog-edit-task.component.html',
  styleUrls: ['./dialog-edit-task.component.scss']
})
export class DialogEditTaskComponent implements OnInit {
  taskList: Task = new Task();
  addForm: FormGroup;
  message: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpServerService,
    private snackBar: MatSnackBar,
    private service: DataServiceService,

  ) { }

  ngOnInit() {
    this.service.currentMessage.subscribe(
      (message: any) => {
        this.message = message;
        this.addForm = this.formBuilder.group(
          {
            'name': new FormControl(this.taskList.name, [Validators.required]),
            'description': new FormControl(this.taskList.description, [Validators.required]),
          }
        )
      }
    )

  }

  updateTask() {
    this.http.put('updatetask/' + this.data.element.tid, this.taskList).subscribe(
      (response: any) => {
        if (response.statusCode == 200) {
          this.service.changeMessage(response.statusMessage);
          this.snackBar.open(response.statusMessage, 'close', { duration: 3000 });
        }else{
          this.service.changeMessage(response.statusMessage);
          this.snackBar.open(response.statusMessage, 'close', { duration: 3000 });
        }
      }
    )
  }

}
