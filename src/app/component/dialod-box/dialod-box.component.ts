import { Component, OnInit ,Inject } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AddMember } from "../../model/add-member";
import { HttpServerService } from "../../service/http-server.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-dialod-box',
  templateUrl: './dialod-box.component.html',
  styleUrls: ['./dialod-box.component.scss']
})
export class DialodBoxComponent implements OnInit {

  member: AddMember = new AddMember();
  addForm: FormGroup;

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
        'name': new FormControl(this.member.name, [Validators.required]),
        'desg': new FormControl(this.member.desg, [Validators.required]),
        'mobile': new FormControl(this.member.mobileNo, [Validators.required]),
      }
    )
  }

  update() {
    console.log(this.member);
    this.http.put('updateUser/'+this.data.items.id, this.member).subscribe(
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
