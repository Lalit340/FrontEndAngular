import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AddMember } from "../../model/add-member";
import { HttpServerService } from "../../service/http-server.service";
import { MatSnackBar } from "@angular/material/snack-bar";


@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.scss']
})
export class AddMemberComponent implements OnInit {
  member: AddMember = new AddMember();
  addForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpServerService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group(
      {
        'name': new FormControl(this.member.name, [Validators.required]),
        'desg': new FormControl(this.member.desg, [Validators.required]),
        'mobile': new FormControl(this.member.mobileNo, [Validators.required]),
        'email': new FormControl(this.member.mail, [Validators.required]),
        'password': new FormControl(this.member.password, [Validators.required, Validators.minLength(6)]),

      }
    )
  }

  register() {
    console.log(this.member);
    this.http.post('register', this.member).subscribe(
      (response: any) => {
        if (response.statusCode == 200) {
          this.snackBar.open(response.statusMessage, "close", { duration: 3000 });
        } else {
          this.snackBar.open(response.statusMessage, "close", { duration: 3000 });
        }
      }
    )

  }
}
