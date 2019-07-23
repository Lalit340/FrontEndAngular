import { Component, OnInit } from '@angular/core';
import { Task } from "../../model/task";
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { HttpServerService } from "../../service/http-server.service";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {
  userTask: Task = new Task();
  taskForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpServerService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.taskForm = this.formBuilder.group({
      'name': new FormControl(this.userTask.name, [Validators.required]),
      'description': new FormControl(this.userTask.description, [Validators.required])
    })
  }
  create() {
    console.log(this.userTask);
    this.http.post('createtask', this.userTask).subscribe(
      (response: any) => {
        if (response.ststusCode == 200) {
          this.snackBar.open(response.statusMessage, 'close', { duration: 3000 })
        } else {
          this.snackBar.open(response.statusMessage, 'close', { duration: 3000 })
        }
      }
    )

  }
}
