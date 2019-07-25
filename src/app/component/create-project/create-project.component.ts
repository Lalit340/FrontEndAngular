import { Component, OnInit } from '@angular/core';
import { Project } from "../../model/project";
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { HttpServerService } from "../../service/http-server.service";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit {
  userProject: Project = new Project();
  projForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpServerService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.projForm = this.formBuilder.group({
      'name': new FormControl(this.userProject.name, [Validators.required]),
      'description': new FormControl(this.userProject.description, [Validators.required])
    })
  }

  create() {
    console.log(this.userProject);
    this.http.post('createProject', this.userProject).subscribe(
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
