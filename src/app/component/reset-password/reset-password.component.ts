import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ResetPasswordModel } from "../../model/reset-password-model";
import { Router } from "@angular/router";
import { HttpServerService } from "../../service/http-server.service";
import { MatSnackBar } from "@angular/material/snack-bar";


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  passwordModel : ResetPasswordModel = new ResetPasswordModel();
  passwordForm : FormGroup ;
  status : string;
token = localStorage.getItem('token');
  constructor(
    private formBulder :FormBuilder,
    private router: Router,
    private http: HttpServerService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.passwordForm = this.formBulder.group({
      'password': new FormControl(this.passwordModel.password, [Validators.required, Validators.minLength(6)]),
      'conformPassword': new FormControl(this.passwordModel.conformPassword, [Validators.required, Validators.minLength(6)]),

    })
  }

  reset(){
    console.log(this.token);
    
    console.log(this.passwordModel);
     this.status = localStorage.getItem('code');
     if(this.passwordModel.password == this.passwordModel.conformPassword){
        this.http.putWithToken('resetpassword' , this.passwordModel).subscribe(
          (response: any) =>{
            if(response.statusCode == 205){
              console.log("hi");
              if(this.status == '201' || this.status == '204'){
                this.snackBar.open(response.statusMessage, 'close', { duration: 3000 });
                this.router.navigate(['/dddashboard']);
              }else if (this.status == '202') {
                this.snackBar.open(response.statusMessage, 'close', { duration: 3000 });
                this.router.navigate(['/tldashboard']);
              }else if (this.status == '203') {
                this.snackBar.open(response.statusMessage, 'close', { duration: 3000 });
                this.router.navigate(['/pmdashboard']);
              }else {
                console.log(response);
                this.snackBar.open(response.statusMessage, 'close', { duration: 3000 });
              }
            }
          }
        )
     }
  }
  skip(){
    this.status = localStorage.getItem('code');
    if(this.status == '201' || this.status == '204'){
      this.router.navigate(['/dddashboard']);
    }else if (this.status == '202') {
      this.router.navigate(['/tldashboard']);
    }else if (this.status == '203') {
      this.router.navigate(['/pmdashboard']);
    }else {
      this.snackBar.open(" sorry spik is failed ", 'close', { duration: 3000 });
    }
  }

}
