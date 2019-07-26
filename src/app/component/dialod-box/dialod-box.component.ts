import { Component, OnInit ,Inject } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
import { AddMember } from "../../model/add-member";
import { HttpServerService } from "../../service/http-server.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DataServiceService } from "src/app/service/data-service.service";


@Component({
  selector: 'app-dialod-box',
  templateUrl: './dialod-box.component.html',
  styleUrls: ['./dialod-box.component.scss']
})
export class DialodBoxComponent implements OnInit {

  member: AddMember = new AddMember();
  addForm: FormGroup;
  message : any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data : any,
    private formBuilder: FormBuilder,
    private http: HttpServerService,
    private snackBar: MatSnackBar,
    private service : DataServiceService,
  ) { }

  ngOnInit() {
    this.service.currentMessage.subscribe(
      ( message : any)=>{
          this.message = message;
          this.addForm = this.formBuilder.group(
            {
              'name': new FormControl(this.member.name, [Validators.required]),
              'desg': new FormControl(this.member.desg, [Validators.required]),
              'mobile': new FormControl(this.member.mobileNo, [Validators.required]),
            }
          )
       }
     )
  
  }

  update() {
    console.log(this.member);
    this.http.put('updateUser/'+this.data.items.id, this.member).subscribe(
      (response: any) => {
        if (response.statusCode == 200) {
          this.snackBar.open(response.statusMessage, "close", { duration: 3000 });
          this.service.changeMessage(response.statusMessage);

        } else {
          this.snackBar.open(response.statusMessage, "close", { duration: 3000 });
          this.service.changeMessage(response.statusMessage);

        }
      }
    )

  }

}
