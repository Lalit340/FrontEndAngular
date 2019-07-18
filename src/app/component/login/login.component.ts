import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { LoginUser } from "../../model/login-user";
import { Router } from "@angular/router";
import { HttpServerService } from "../../service/http-server.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user : LoginUser =new LoginUser();
  loginForm:  FormGroup;
  token : string;
  constructor(
    private formBuilder : FormBuilder,
    private router : Router ,
    private http : HttpServerService,
    ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group(
      {
        'email' : new FormControl(this.user.email , [Validators.required]),
        'password': new FormControl(this.user.password , [Validators.required , Validators.minLength(6)]),
      }
    )
  }

  navigate (){
    console.log(this.user.email);
    console.log(this.user.password);
    
    
    this.router.navigate(['/pmdashboard']);
  }

}
