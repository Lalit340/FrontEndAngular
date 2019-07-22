import { Component, OnInit ,Inject} from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Project } from "../../model/project";
import { HttpServerService } from "../../service/http-server.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-dialog-edit-projects',
  templateUrl: './dialog-edit-projects.component.html',
  styleUrls: ['./dialog-edit-projects.component.scss']
})
export class DialogEditProjectsComponent implements OnInit {
  project : Project = new Project();
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
        'name': new FormControl(this.project.name, [Validators.required]),
        'description': new FormControl(this.project.description, [Validators.required]),
      }
    )
  }

  updateProject(){
    this.http.put('updateProj/'+this.data.items.pid,this.project).subscribe(
      (response : any) =>{
        if(response.statusCode == 200){
          this.snackBar.open(response.statusMessage , 'close' ,{duration :3000});
        }
      }
    )
  }
}
