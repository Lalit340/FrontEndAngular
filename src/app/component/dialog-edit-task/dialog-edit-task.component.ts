import { Component, OnInit ,Inject } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
 import { Task } from "../../model/task";
import { HttpServerService } from "../../service/http-server.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-edit-task',
  templateUrl: './dialog-edit-task.component.html',
  styleUrls: ['./dialog-edit-task.component.scss']
})
export class DialogEditTaskComponent implements OnInit {
  taskList : Task = new Task();
  addForm : FormGroup;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data : any,
    private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpServerService,
    private snackBar: MatSnackBar,
  ) { }
  
  ngOnInit() {
    this.addForm = this.formBuilder.group(
      {
        'name': new FormControl(this.taskList.name, [Validators.required]),
        'description': new FormControl(this.taskList.description, [Validators.required]),
      }
    )
  }

  updateTask(){
    this.http.put('updatetask/'+this.data.items.tid,this.taskList).subscribe(
      (response : any) =>{
        if(response.statusCode == 200){
          this.snackBar.open(response.statusMessage , 'close' ,{duration :3000});
        }
      }
    )
  }

}
